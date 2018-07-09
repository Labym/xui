<template>
    <transition name="el-zoom-in-center">
        <div class="sidebar-container" :class="{'is-active':isCollapse}">
            <Logo :isCollapse="isCollapse"></Logo>
            <el-menu
                    :unique-opened="true"
                    default-active="2"
                    mode="vertical"
                    :show-timeout="200"
                    background-color="#00142a"
                    text-color="hsla(0,0%,100%,.65)"
                    active-text-color="#409eff"
                    :collapse="isCollapse">
                <el-submenu index="1" >
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </div>
    </transition>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Logo from './logo'

    export default {
        components: {
            Logo
        },
        computed: {
            ...mapGetters([
                "isCollapse",
            ])
        },
    }
</script>

<style lang="scss" scoped>
    @import '../../styles/variables.scss';

    .el-menu-vertical-nav {
        background-color: $theme-color;
        height: 100vh;
    }

    .sidebar-container {
        background: $theme-color;
        transition: width 0.6s;
        height: 100vh;
        &.is-active {
            width: 64px !important;
        }
    }

    .nest-menu .el-submenu > .el-submenu__title,
    .el-submenu .el-menu-item {
        background-color: #021d3a !important;
        &:hover {
            background: #00142a !important;
        }
    }
</style>


