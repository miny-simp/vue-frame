<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
  height: 100%;
  background-color: #E9EEF3;
}
#app {
  width: 100%;
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.content{
  height: 100%;
}
.height100 {
  height: 100%;
}
.gray {
  color: #6b90ab;
}

::-webkit-scrollbar{width: 2px; height: 8px;}
::-webkit-scrollbar-button:vertical{display: none;}
::-webkit-scrollbar-track{background-color: #2e648a;}
::-webkit-scrollbar-corner{background-color: #82AFFF;}
::-webkit-scrollbar-thumb{border-radius: 0; background-color: rgba(107, 164, 202,.3);}
::-webkit-scrollbar-thumb:vertical:hover{background-color: rgba(107, 164, 202,.35);}
::-webkit-scrollbar-thumb:vertical:active{background-color: rgba(107, 164, 202,.38);}

.el-menu-vertical-demo .el-submenu__title i {
  color: #fff;
}
.el-menu-vertical-demo .el-submenu.is-active .el-submenu__title {
  background: #5797e5!important;
  font-weight: bold;
}
.plan-form-inline .el-input {
  width: 120px;
}
.plan-form-inline .el-date-editor--daterange.el-input__inner {
  width: 200px;
}
</style>
