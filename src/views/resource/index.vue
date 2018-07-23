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
                        <el-button type="primary" class="pull-left">添加</el-button>
                        <el-button type="danger" class="pull-left btn-margin-left ">删除</el-button>
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
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="id"
                        label="Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        prop="parentId"
                        label="上级Id"
                        width="70">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名字"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="code"
                        label="代码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="url"
                        label="URL"
                        width="180">
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
                width="30%"
                :close-on-click-modal="false"
               >
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="活动时间">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                        <el-col class="line" :span="2">-</el-col>
                        <el-col :span="11">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="即时配送">
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

    export default {
        name: "resourceManager",
        data() {
            return {
                form:{},
                dialogVisible:false,
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
                console.log(data)
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