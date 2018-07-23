<template>
    <div class="basic-container">
        <el-card>
            <div slot="header" class="clearfix title">
                <span><b>{{title}}</b></span>
            </div>
            <div class="header" >
                <slot name="header"></slot>
            </div>
           <slot></slot>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "basicContainer",
        props:{
            title:""
        }
    };
</script>

<style lang="scss">
    .basic-container {
        padding: 20px;
        border-radius: 6px;
        .title{
            margin-left: 20px;
            text-align: left;
        }
        .header{
            padding-bottom: 20px;
            border-bottom: 1px solid #ebeef5;
            margin-bottom: 20px;
        }
    }
</style>
