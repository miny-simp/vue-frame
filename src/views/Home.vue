<template>
  <el-container>
    <el-header>
      <HeaderBox />
    </el-header>
    <el-container style="height: calc(100% - 70px);">
      <el-aside width="220px">
        <NavMenu />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import headerBg from '../assets/images/header_bg.png'
import NavMenu from '../components/nav.vue'
import HeaderBox from '../components/header.vue'
export default {
  name: "Home",
  components: {
    NavMenu,
    HeaderBox
  },
  data() {
    return {
      headerBgImg: headerBg
    }
  },
};
</script>
<style lang="less">
.is-vertical {
  height: 100%;
  .el-header {
    background-color: #454d58;
    /* background: url('~@/assets/images/header_bg.png') center center no-repeat; */
    height: 70px;
    border-bottom: 1px solid #9E9E9E;
    color: #fff;
  }
  .el-aside {
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .el-aside::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .el-main {
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    color: #333;
  }
}
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
  margin-bottom: 10px;
}
</style>
