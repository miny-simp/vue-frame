<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div class="header-title">
          <p class="header-title-text">后台管理系统</p>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header-menu">
          <span><i class="el-icon-refresh-right" style="margin-right: 15px"></i></span>
          <span><i class="el-icon-full-screen" style="margin-right: 15px"></i></span>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              <i class="el-icon-user-solid" style="margin-right: 5px"></i>管理员
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="test">修改密码</el-dropdown-item>
              <el-dropdown-item command="login">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  methods: {
    handleCommand(command) {
      console.log('click on item ' + command);
      if(command == 'login'){
        localStorage.clear();
      }
      this.$router.push({name: command});
    }
  }
}
</script>
<style scoped>
.header-title p {
  margin: 0;
}
.header-title p.header-title-text {
  font-size: 18px;
  font-weight: bold;
  line-height: 60px;
}
.el-dropdown-link {
  cursor: pointer;
}
.el-dropdown {
  color: #fff;
}
.header-menu {
  line-height: 60px;
  text-align: right;
}
</style>