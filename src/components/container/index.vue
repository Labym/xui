<template>
    <div class="basic-container">
        <el-card>
            <div slot="header" class="clearfix title">
                <span><b>{{title}}</b></span>
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

    }
</style>
