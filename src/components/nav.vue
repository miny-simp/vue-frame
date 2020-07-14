<template>
  <el-container>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#454d58"
      text-color="#fff"
      active-text-color="#fff"
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>台账管理</span>
        </template>
        <el-menu-item index="circuit">
          <i class="el-icon-s-operation"></i>
          <span slot="title">电网线路资源信息</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">计划派工</span>
        </template>
        <el-menu-item index="monthlyPlan">
          <i class="el-icon-date"></i>
          <span slot="title">月计划管理</span>
        </el-menu-item>
        <el-menu-item index="test">
          <i class="el-icon-date"></i>
          <span slot="title">计划任务管理</span>
        </el-menu-item>
        <el-menu-item index="test">
          <i class="el-icon-date"></i>
          <span slot="title">任务单管理</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">任务管控</span>
        </template>
        <el-menu-item index="test">
          <i class="el-icon-coordinate"></i>
          <span slot="title">巡检监控</span>
        </el-menu-item>
        <el-menu-item index="test">
          <i class="el-icon-set-up"></i>
          <span slot="title">巡检历史记录</span>
        </el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span slot="title">资料归档</span>
        </template>
        <el-menu-item index="test">
          <i class="el-icon-s-management"></i>
          <span slot="title">飞巡数据管理</span>
        </el-menu-item>
        <el-menu-item index="test">
          <i class="el-icon-s-flag"></i>
          <span slot="title">缺陷管理</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </el-container>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      activeIndex: 'monthlyPlan'
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-container {
  height: 100%;
}
.el-container .el-menu {
  width: 100%;
}
.el-menu-item.is-active {
  background: #5797e5!important;
  font-weight: bold;
}
</style>
