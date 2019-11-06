<template>
  <div id="app"> 
    <div v-if="$route.path == '/login'"><router-view name='login' ></router-view ></div>
   <el-container v-else>
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

}
html,body{
    margin: 0;
    padding: 0;
    min-width: 1000px;
  }
ul,li{
  list-style: none;
} 
a{
  text-decoration: none;
} 
.el-header {
    height:56px;
    width: 100%;
    padding-right:30px;
    position: fixed;
    left: 92px;top: 0;
    z-index: 999;
    background: #fff;

  }
  
  .el-aside {
    background-color: #D3DCE6;
    position: fixed;
    left: 0;top: 0;
   
  }
  
  .el-main {
    background-color: #E9EEF3;
    margin:56px 0 0 92px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  
  

</style>
