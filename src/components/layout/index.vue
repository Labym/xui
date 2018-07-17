<template>
    <el-container style="height: 100%;">
        <el-aside :style="{width: isCollapse ? asideWidthCollapse : asideWidth}">
            <Side></Side>
        </el-aside>
        <el-container>
            <el-header class="header-tabs">
                <Top></Top>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Top from './top'
    import Side from './side'
    import {UserActions} from "../../store/actions";

    export default {

        components: {
            Top, Side
        },
        computed: mapGetters(['isCollapse', "menus","token"]),
        beforeMount(){
            this.$store.dispatch(UserActions.actions.GET_MENUS).then(res => {
                console.log('get menus success:'+res)
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
    .header-tabs {
        padding: 0 0 !important;
    }
</style>


