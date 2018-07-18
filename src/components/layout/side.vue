<template>
    <transition name="el-zoom-in-center">
        <div class="sidebar-container" :class="{'is-active':isCollapse}">
            <Logo :isCollapse="isCollapse"></Logo>

            <el-menu unique-opened
                     class="el-menu-vertical-demo"
                     mode="vertical"
                     :router="true"
                     :show-timeout="200"
                     background-color="#00142a"
                     text-color="hsla(0,0%,100%,.65)"
                     active-text-color="#409eff"
                     :collapse="isCollapse">
                <template v-for="(item,index) in currentMenu.children">
                    <el-menu-item v-if="item.children.length===0 " :index="index+''"  :key="item.code">
                        <icon :name="item.extensions.icon"></icon>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>

                    <el-submenu v-else :index="index+''" :key="item.code" >
                        <template slot="title">
                            <icon :name="item.extensions.icon"></icon>
                            <span slot="title" :class="{'el-menu--display':isCollapse}">{{item.name}}</span>
                        </template>
                        <template v-for="(child,cindex) in item.children">
                            <el-menu-item :index="cindex+''"  :key="cindex" :route="{path:child.url}">
                                <icon :name="child.extensions.icon"></icon>
                                <span slot="title">{{child.name}}</span>
                            </el-menu-item>
                        </template>
                    </el-submenu>
                </template>
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
        mounted(){
            console.log('--=====')

        },
        computed: {
            ...mapGetters([
                "isCollapse", "currentMenu"
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


