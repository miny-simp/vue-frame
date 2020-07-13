<template>
  <el-container>
    <el-header>
      <HeaderBox />
    </el-header>
    <el-container>
      <el-aside width="200px">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  /* background-color: #B3C0D1; */
  background: url('~@/assets/images/header_bg.png') center center no-repeat;
  height: 70px;
  color: #fff;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
}

.el-container.is-vertical {
  height: 100%;
}
</style>
