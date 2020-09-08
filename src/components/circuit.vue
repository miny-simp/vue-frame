<template>
  <div class="content tree-page">
    <div class="tree-content">
      <el-row>
        <el-button
          type="primary"
          size="small"
        >下载</el-button>
        <el-button
          type="success"
          size="small"
        >导入</el-button>
      </el-row>
      <div class="tree-box">
        <el-tree
          :data="treeData"
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="defaultProps"
          :expand-on-click-node="false"
          @node-click="handleNodeClick"
        ></el-tree>
      </div>
    </div>
    <div class="drag-box"></div>
    <div class="form-content">
      <span>{{formName}}</span>
      <el-divider content-position="right">在运</el-divider>
      <div class="form-content-box">
        <div class="item-con" v-for="item in formData" :key="item.name">
          <div class="left">{{item.name}}</div>
          <div class="right">{{item.value}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      treeData: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      formName: '',
      formData: [
        {name: '名称', value: '1-1'},
        {name: '距离', value: '100'},
        {name: '高度', value: '48'},
      ]
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
      this.formName = data.label;
    }
  }
};
</script>
<style lang="less">
.tree-page {
  display: flex;
  .tree-content {
    width: 200px;
    margin-right: 10px;
    .tree-box {
      height: calc(100% - 42px);
      margin-top: 10px;
      overflow: auto;
    }
  }
  .drag-box {
    width: 10px;
    height: 100%;
    background: #e2e2e2;
    margin-right: 10px;
  }
  .form-content {
    flex: 1;
    /deep/ .el-divider--horizontal {
      margin: 15px 0;
    }
    .form-content-box {
      height: calc(100% - 52px);
      overflow-y: auto;
      .item-con {
        display: flex;
        line-height: 32px;
        margin-bottom: 10px;
        border: 1px solid #e6e6e6;
        font-size: 14px;
        .left {
          width: 100px;
          text-align: center;
          background-color: #FBFBFB;
          border-right: 1px solid #e6e6e6;
        }
        .right {
          flex: 1;
          padding: 0 10px;
        }
      }
    }
  }
}
</style>