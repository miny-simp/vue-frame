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

.plan-form-inline .el-input {
  width: 120px;
}
.plan-form-inline .el-date-editor--daterange.el-input__inner {
  width: 200px;
}
</style>
