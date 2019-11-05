<template>
  <div id="app">
     
   <el-container>
      <el-aside width="92px"><shopNav></shopNav></el-aside>
      <el-container>
        <el-header>
          <shopHeader></shopHeader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
       </el-container>
    </el-container>
     
  </div>
</template>

<script>
import shopNav from "@/components/ShopNav.vue"
import shopHeader from "@/components/ShopHeader.vue"
export default {
  name: 'app',
  components: {
      shopNav,
      shopHeader 

  }
}
</script>

<style>
*{
  margin: 0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
  

}
html,body{
    margin: 0;
    padding: 0;
  }
ul,li{
  list-style: none;
} 
a{
  text-decoration: none;
} 
.el-header {
    height:56px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  /* .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  } */
  

</style>
