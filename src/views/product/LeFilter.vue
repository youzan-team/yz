<template>
  <div>
      <el-row :gutter="20">
          <el-col :span="8">

          </el-col>
          <el-col :span="8">

          </el-col>
          <el-col :span="8">

          </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="8">
              商品名称或编码：
              <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="8">
              商品分组：

          </el-col>
          <el-col :span="8">
              商品类型：
          </el-col>
      </el-row>   
      <el-row :gutter="20">
          <el-col :span="8">
              总销量：

          </el-col>
          <el-col :span="8">
              价格：
          </el-col>
          <el-col :span="8">
              库存扣减方式：
          </el-col>
      </el-row>      
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input{
  width:200px;
}
///////////
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
