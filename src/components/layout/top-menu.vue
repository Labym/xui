<template>
    <el-menu
            class="el-menu-top"
            mode="horizontal"
            :default-active="activeIndex"
            :onselect="changeNav"
    >
        <template v-for="(item,index) in menus">
            <el-menu-item :index="index+''" @click.native="changeNav(item)">{{item.name}}</el-menu-item>
        </template>
    </el-menu>
</template>

<script>
    import {mapGetters} from "vuex";
    import {UserActions} from "../../store/actions";

    export default {
        name: "top-menu",
        data() {
            return {
                activeIndex: '0'
            }
        },
        computed: {
            ...mapGetters([
                "userInfo", "menus", "currentMenu"
            ])
        },
        beforeMount() {
            this.changeNav(this.menus[0])
        },
        methods: {
            filterPath(index) {
                return index + "index"
            },

            changeNav(menu) {
                this.$store.commit(UserActions.mutations.CHANGE_CURRENT_MENU,menu)
            }
        }
    }
</script>

<style scoped>

</style>