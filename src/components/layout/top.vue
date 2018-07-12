<template>
    <div class="top">

        <div class="top-button is-left">
            <!-- breadcrumb按钮和面包屑 -->
            <div class="tags-breadcrumb">
                <i class="el-icon-menu tag-collapse" :class="[{ 'tag-collapse_right': isCollapse }]"
                   @click="showCollapse"></i>

            </div>
        </div>
        <h1 class="top-title">
            <topMenu></topMenu>
        </h1>

        <topRight></topRight>


    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    import {CommonActions} from "../../store/actions";
    import topMenu from './top-menu'
    import topRight from './top-right'

    export default {
        name: 'Top',
        data() {
            return {};
        },
        components: {
            topMenu, topRight
        },
        computed: {
            ...mapGetters([
                "isCollapse", "userInfo"
            ])
        },
        methods: {
            logout() {
            },
            showCollapse() {
                this.$store.commit(CommonActions.SET_COLLAPSE);
            },
        }
    }
</script>

<style lang="scss">
    @import '../../styles/variables';

    .top {
        align-items: center;
        border-bottom: 1px solid #eee;
        color: rgba(0, 0, 0, 0.65);
        display: flex;
        font-size: 18px;
        height: 64px;
        line-height: 1;
        padding: 0 0;
        white-space: nowrap;
    }

    .top-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: inherit;
        font-weight: 400;
        flex: 1;
    }

    .top-userImg {
        margin: 0 8px 0 10px;
        padding: 2px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
        box-sizing: border-box;
        border: 1px solid #eee;
    }

    .top-button {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .top-item {
        margin-right: 12px;
    }
</style>


