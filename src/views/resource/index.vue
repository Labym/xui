<template>
    <basic-container title="资源管理">
        <div class="about" slot="title">
            <h1>资源管理</h1>
        </div>

            <div slot="header" >
                <el-row type="flex">
                    <el-col :span="8">
                        <el-input v-model="search" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary" class="btn-margin-left pull-left">搜索</el-button>
                    </el-col>
                </el-row>
                <br/>
                <el-row type="flex">
                    <el-col :span="24">
                        <el-button-group class="pull-left">
                            <el-button
                                    icon="el-icon-edit"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                    icon="el-icon-delete"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </el-button-group>
                    </el-col>
                </el-row>
            </div>


            <el-table
                    ref="multipleTable"
                    tooltip-effect="dark"
                    border
                    :data="data.content"
                    >
                <el-table-column
                        align="left"
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="id"
                        label="Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="parentId"
                        label="上级Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="name"
                        label="名字"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="code"
                        label="代码"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="type"
                        label="类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="url"
                        label="URL"
                        width="180">
                </el-table-column>
                <el-table-column
                        align="left"
                        prop="createAt"
                        label="创建时间"
                        width="180">
                </el-table-column>

                <el-table-column  align="left" label="操作">
                    <template slot-scope="scope">
                        <el-button-group>
                            <el-button
                                    icon="el-icon-edit"
                                    type="primary"
                                    @click="handleEdit(scope.$index, scope.row)">编辑
                            </el-button>
                            <el-button
                                    icon="el-icon-delete"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除
                            </el-button>
                        </el-button-group>
                    </template>
                </el-table-column>
            </el-table>



        <el-dialog

                :visible.sync="dialogVisible"
                width="30%"
                :close-on-click-modal="false"
               >
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="资源名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="资源代码">
                        <el-input v-model="form.code"></el-input>
                    </el-form-item>
                    <el-form-item label="URL">
                        <el-input v-model="form.url"></el-input>
                    </el-form-item>
                    <el-form-item label="排序">
                        <el-input-number class="pull-left" v-model="form.sort" min="1" max="10000">0</el-input-number>
                    </el-form-item>
                    <el-form-item label="资源类型">
                        <el-select class="pull-left" v-model="form.type">
                            <el-option label="菜单"  value="MENU"></el-option>
                            <el-option label="权限"  value="PERMISSION"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="上级">
                        <el-cascader
                                class="pull-left"
                                :props="cascaderprops"
                                v-model="form.parentId"
                                :options="cascaderOptions"
                                style="width: 100%"
                                change-on-select
                        ></el-cascader>
                    </el-form-item>
                    <el-form-item label="附加属性">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="活动性质">
                        <el-checkbox-group v-model="form.type">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="特殊资源">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="线上品牌商赞助"></el-radio>
                            <el-radio label="线下场地免费"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="活动形式">
                        <el-input type="textarea" v-model="form.desc"></el-input>
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
    import ElSelectDropdown from "element-ui/packages/select/src/select-dropdown";

    export default {
        name: "resourceManager",
        components: {ElSelectDropdown},
        data() {
            return {
                form:{
                    sort:0
                },
                dialogVisible:false,
                search: '',
                multipleSelection: [],
                data: null,
                menuTree:null,
                cascaderprops:{
                    label:"name",
                    value:"id"
                },
                cascaderOptions:[
                    { id: 0,
                        name: "顶级资源",
                        url: "/system-manager",
                        code: "systemManager"}
                ],
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1517 弄'
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1516 弄'
                    }]
            }

        },
        mounted() {
            this.$store.dispatch(ResourceActions.actions.LIST).then(data => {
                this.data = data
            })

            this.$store.dispatch(ResourceActions.actions.TREE).then(data => {
                data.forEach(item=>{
                    this.cascaderOptions.push(item)
                })
                t
            })
        },
        methods: {
            handleEdit() {
                this.dialogVisible=true
            },
            handleDelete() {
            }
        }
    }
</script>

<style scoped>

</style>