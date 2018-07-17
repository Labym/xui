<template>
    <div class="top-button is-right">
        <el-tooltip class="item" effect="dark" content="主题色" placement="bottom">
            <span class="top-item">

            </span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
            <span class="top-item">

            </span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" :content="isFullScreen?'退出全屏':'全屏'" placement="bottom">
            <span class="top-item">
                <i :class="isFullScreen?'icon-tuichuquanping':'icon-quanping'" @click="handleScreen"></i>
            </span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="用户头像" placement="bottom">
            <img class="top-userImg" :src="userInfo.avatar">
        </el-tooltip>
        <el-dropdown>
            <span class="el-dropdown-link">
                {{userInfo.username}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    <router-link to="/">首页</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <router-link to="/info/index">个人信息</router-link>
                </el-dropdown-item>
                <el-dropdown-item>
                    <a href="https://gitee.com/smallweigit/avue" target="_blank">码云地址</a>
                </el-dropdown-item>
                <el-dropdown-item>
                    <a href="https://github.com/nmxiaowei/avue" target="_blank">github</a>
                </el-dropdown-item>
                <el-dropdown-item @click.native="logout" divided>退出系统</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "top-right",
        computed: {
            ...mapGetters([
                "isCollapse", "userInfo", "isFullScreen"
            ])
        },
        methods: {
            handleScreen() {
            }
        }
    }
</script>

<style scoped>

</style>