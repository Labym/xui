<template>
    <basic-container title="资源管理">
        <div class="about" slot="title">
            <h1>资源管理</h1>
        </div>

        <div slot="header">
            <el-row type="flex">
                <el-col :span="8">
                    <el-input v-model="search" placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" class="btn-margin-left pull-left">搜索</el-button>
                </el-col>
            </el-row>

            <el-row style="margin-top: 10px">
                <el-col :span="24">
                    <el-button-group class="pull-left">
                        <el-button type="primary" icon="el-icon-plus" >添加</el-button>
                        <el-button type="danger" icon="el-icon-delete"  >删除</el-button>
                    </el-button-group>
                </el-col>
            </el-row>
        </div>


        <el-table
                ref="multipleTable"
                tooltip-effect="dark"
                border
                :data="data.content"
                style="width: 100%">
            <el-table-column
                    type="selection"
                    width="40">
            </el-table-column>
            <el-table-column
                    prop="id"
                    label="Id"
                    width="60">
            </el-table-column>
            <el-table-column
                    prop="parentId"
                    label="上级Id"
                    width="40">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="名字"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="code"
                    label="代码"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="type"
                    label="类型"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="url"
                    label="URL"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="createAt"
                    label="创建时间"
                    width="180">
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            icon="el-icon-edit"
                            type="primary"
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑
                    </el-button>
                    <el-button
                            icon="el-icon-delete"
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-dialog

                :visible.sync="dialogVisible"
                width="40%"
                :close-on-click-modal="false"
        >
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="资源名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="资源代码">
                    <el-input v-model="form.code"></el-input>
                </el-form-item>
                <el-form-item label="资源类型">
                    <el-select class="pull-left" v-model="form.type" placeholder="资源类型">
                        <el-option label="菜单" value="MENU"></el-option>
                        <el-option label="权限" value="PERMISSION"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="上级资源">
                    <el-cascader class="pull-left"
                            placeholder="试试搜索：指南"
                            :options="tableData"
                                 :props="cascaderProps"
                             v-model="form.parentId"
                            change-on-select
                    ></el-cascader>
                </el-form-item>

                <el-form-item label="排序">
                    <el-input-number class="pull-left" v-model="form.sort" :min="0" :max="10000"
                                     label="排序"></el-input-number>
                </el-form-item>
                <el-form-item
                              v-for="(extension, index) in form.extensions"
                              :label="'附加属性'+(index+1)"
                              :key="'extension_'+index"
                >

                    <el-col :span="8">
                        <el-input class="pull-left" style="width: 100%;"
                                  placeholder="请输入属性名称"
                                  v-model="extension.key"></el-input>
                    </el-col>
                    <el-col class="line" :span="1">:</el-col>
                    <el-col :span="8">
                        <el-input
                                placeholder="请输入属性值"
                                v-model="extension.value"></el-input>
                    </el-col>
                    <el-col class="line" :span="7">
                        <el-button-group>
                            <el-button type="primary" icon="el-icon-plus" @click="handleAddExtension"></el-button>
                            <el-button type="danger" icon="el-icon-delete"></el-button>
                        </el-button-group>
                    </el-col>

                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="handleEdit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

    </basic-container>
</template>

<script>
    import {ResourceActions} from "../../store/actions";

    export default {
        name: "resourceManager",
        data() {
            return {
                cascaderProps: {
                    value: 'name',
                    label:"name",
                    children: 'children'
                },
                form: {
                    sort: 2,
                    extensions: [{key:'',value:''}]
                },
                dialogVisible: false,
                search: '',
                multipleSelection: [],
                data: null,

                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎1',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎2',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎3',
                        address: '上海市普陀区金沙江路 1516 弄',
                        children:[
                            {
                                date: '2016-05-02',
                                name: '王小虎3-1',
                                address: '上海市普陀区金沙江路 1518 弄'
                            },  {
                                date: '2016-05-02',
                                name: '王小虎3-2',
                                address: '上海市普陀区金沙江路 1518 弄'
                            }
                        ]
                    }]
            }

        },
        mounted() {
            this.$store.dispatch(ResourceActions.actions.LIST).then(data => {
                this.data = data
                console.log(data)
            })
        },
        methods: {
            handleEdit() {
                this.dialogVisible = true
            },
            handleDelete() {
            },
            handleAddExtension(){
                this.form.extensions.push({key:'',value:''})
            }
        }
    }
</script>

<style scoped>

</style>