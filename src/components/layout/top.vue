<template>
<div class="top">

   <div class="top-button is-left">
      <!-- breadcrumb按钮和面包屑 -->
      <div class="tags-breadcrumb">
        <i class="el-icon-menu tag-collapse"  :class="[{ 'tag-collapse_right': isCollapse }]"
           @click="showCollapse"></i>
    
      </div>
    </div>
  <el-menu 

  class="el-menu-top" 
  mode="horizontal"
 >
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="3" disabled>消息中心</el-menu-item>
  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
</el-menu>
</div>
</template>

<script>
import { mapGetters } from "vuex";

import {CommonActions} from "../../store/actions";

export default {
  name: 'Top',
  data () {
    return {};
  },
  computed: {
    ...mapGetters([
      "isCollapse",
    ])
  },
  methods: {
    showCollapse () {
      this.$store.commit(CommonActions.SET_COLLAPSE);
    },
  }
}
</script>

<style lang="scss" >
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


