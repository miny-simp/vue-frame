<template>
  <div>
    <el-form :inline="true" :model="searchForm" ref="searchForm" class="plan-form-inline" size="mini">
      <el-form-item label="线路名称" prop="user">
        <el-input v-model="searchForm.user" placeholder="线路名称"></el-input>
      </el-form-item>
      <el-form-item label="任务类型" prop="region">
        <el-select v-model="searchForm.region" placeholder="任务类型">
          <el-option v-for="item in options" :key="item.item_code" :label="item.item_value" :value="item.item_code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="日期范围" prop="value2">
        <el-date-picker
          v-model="searchForm.value2"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          align="right">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetForm('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="gridData" stripe height="100%" border style="width: 100%">
      <el-table-column property="xh" label="序号" sortable align="center" width="80"></el-table-column>
      <el-table-column property="mc" label="名称" align="center"></el-table-column>
      <el-table-column property="jc" label="简称" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchForm: {
          user: '',
          region: '',
          value2: ''
        },
        options: [
          { item_code: '运行巡视', item_value: '运行巡视'},
          { item_code: '隐患排查', item_value: '隐患排查'}
        ],
        gridData: [
          {"xh": 1, "mc": "张三", "jc": ""},
          {"xh": 2, "mc": "李四", "jc": ""},
          {"xh": 3, "mc": "王五", "jc": ""},
          {"xh": 4, "mc": "赵六", "jc": ""},
          {"xh": 5, "mc": "萋萋", "jc": ""}
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
</style>