<template>
    <basic-container title="资源管理">
        <div class="about" slot="title">
            <h1>资源管理</h1>
        </div>
        <el-card>
            <div slot="header">
                <el-row  type="flex">
                    <el-col :span="8" >
                        <el-input v-model="search" placeholder="请输入内容"></el-input>
                    </el-col>
                    <el-col :span="4"  >
                        <el-button type="primary" class="btn-margin-left pull-left" >搜索</el-button>
                    </el-col>
                </el-row>
                <br/>
                <el-row  type="flex" >
                    <el-col :span="24" >
                        <el-button type="primary" class="pull-left" >添加</el-button>
                        <el-button type="danger" class="pull-left btn-margin-left " >删除</el-button>
                    </el-col>
                </el-row>
            </div>




            <el-table
                    ref="multipleTable"
                    tooltip-effect="dark"
                    border
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="address"
                        label="地址">
                </el-table-column>
            </el-table>
        </el-card>

    </basic-container>
</template>

<script>
    export default {
        name: "resourceManager",
        data() {
            return {
                search: '',
                multipleSelection: [],
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

        }
    }
</script>

<style  scoped>

</style>