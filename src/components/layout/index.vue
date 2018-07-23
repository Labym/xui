<template>
    <el-container class="contail" style="height: 100%;">
        <el-aside :style="{width: isCollapse ? asideWidthCollapse : asideWidth}">
            <Side class="sidebar"> </Side>
        </el-aside>
        <el-container>
            <el-header class="header-tabs">
                <Top></Top>
            </el-header>

            <el-main class="main">
                <!-- 主体视图层 -->
                <keep-alive>
                    <transition name="fade-transverse">
                        <router-view class="view"
                                     v-if="$route.meta.keepAlive" />
                    </transition>
                </keep-alive>
                <transition name="fade-transverse">
                    <router-view class="view"
                                 v-if="!$route.meta.keepAlive" />
                </transition>
            </el-main>


        </el-container>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Top from './top'
    import Side from './side'
    import {UserActions} from "../../store/actions"
    import {initRoute} from "../../common/utils/utils";

    export default {

        components: {
            Top, Side
        },
        computed: mapGetters(['isCollapse', "menus", "token"]),
        beforeMount() {
            this.$store.dispatch(UserActions.actions.GET_MENUS).then(res => {
                initRoute(this.$router,res)
                console.log('init menus ')
            });
        },
        data() {
            return {
                // [侧边栏宽度] 正常状态
                asideWidth: '230px',
                // [侧边栏宽度] 折叠状态
                asideWidthCollapse: '65px',
                //刷新token锁
                refreshLock: false,
                //刷新token的时间
                refreshTime: '',
            }
        },

    }
</script>

<style lang="scss">
    .contail {
        height: 100%;
    }
    .sidebar {
        height: 100%;
    }
    .tabs {
        padding: 0;
    }
    .main {
        position: relative;
        padding: 0;
    }
   .view {
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>


