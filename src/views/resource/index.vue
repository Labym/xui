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
                        align="center"
                        type="selection"
                        width="40">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="id"
                        label="Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="parentId"
                        label="上级Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="name"
                        label="名字"
                        width="150">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="code"
                        label="代码"
                        width="150">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="type"
                        label="类型"
                        width="150">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="url"
                        label="URL"
                        width="150">
                </el-table-column>
                <el-table-column
                        align="center"
                        prop="createAt"
                        label="创建时间"
                        width="180">
                </el-table-column>

                <el-table-column  align="center" label="操作">
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
                width="50%"
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
                        <el-input-number class="pull-left" v-model="form.sort" :min="1" :max="10000">0</el-input-number>
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
                                <el-button type="danger" icon="el-icon-delete" @click="handleRemoveExtension(index)"></el-button>
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
                form:{
                    sort:0,
                    extensions:[
                        {key:'',value:''}
                    ]
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
            },
            handleAddExtension(){
                this.form.extensions.push({key:'',value:''})
            },

            handleRemoveExtension(index){
                this.form.extensions.splice(index,1)
            }

        }
    }
</script>

<style scoped>

</style>