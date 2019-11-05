<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">销售中</el-tab-pane>
    <el-tab-pane label="配置管理" name="second">已售罄</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">仓库</el-tab-pane>
    <el-row>
        <el-col :span="2">
            <el-button type="primary">发布商品</el-button>
        </el-col>
        <el-col :span="22">
        </el-col>
    </el-row>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="scss" scoped>
el-button{
    float:left;
}
</style>
