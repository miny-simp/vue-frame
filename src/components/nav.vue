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
      <el-submenu v-for="item in navList" :key="item.name" :index="item.index">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="subItem in item.children" :key="subItem.name" :index="subItem.page">
          <i class="el-icon-s-management"></i>
          <span slot="title">{{subItem.name}}</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
    <!-- <el-menu
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
    </el-menu> -->
  </el-container>
</template>

<script>
export default {
  name: "navMenu",
  data() {
    return {
      activeIndex: 'monthlyPlan',
      navList: [
        {
          'name': '台账管理', 
          'index': "1", 
          children: [
            {'name': '电网线路资源信息', 'page': 'circuit'}
          ]
        },
        {
          'name': '计划派工', 
          'index': "2", 
          children: [
            {'name': '月计划管理', 'page': 'monthlyPlan'},
            {'name': '计划任务管理', 'page': 'test'},
            {'name': '任务单管理', 'page': 'test'}
          ]
        },
        {
          'name': '资料归档', 
          'index': "3", 
          children: [
            {'name': '飞巡数据管理', 'page': 'test'},
            {'name': '缺陷管理', 'page': 'test'}
          ]
        }
      ]
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
<style lang="less">
.el-container {
  height: 100%;
  .el-menu {
    width: 100%;
    background-color: #454d58;
    .el-menu-item i {
      color: #fff;
    }
  }
  .is-active {
    background: url('~@/assets/images/bg_1.png') no-repeat;
    background-size: cover;
    font-weight: bold;
  }
}
</style>
