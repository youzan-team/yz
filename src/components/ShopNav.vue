<template>

<el-container>
  <el-aside width="92px">
      <span class="bang"></span>
      <router-link tag='div' to='./shop'>店铺</router-link>
      <router-link tag='div' to='./product'>商品</router-link>
      <router-link tag='div' to='./order'>订单</router-link>
      <router-link tag='div' to='./customer'>客户</router-link>    
  </el-aside>
  
</el-container>
    
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
 .el-aside {
    background-color: #444444;
    color: #c8c9cc;
    height: 100%;
    text-align: center;
    border: #444444 1px solid;
    // line-height: 200px;
    >div{
        height: 40px;
        line-height: 40px;
    }
  }
</style>

