<template>
    <div class="shop" >
      <el-row>
            <!-- 左边导航 -->
           <el-col :span="2">
              
            </el-col>

             <!-- 中间内容 -->
            <el-col :span="18" style=" padding: 0 10px;">
               <div  style="height:1000px">

                   <!-- head -->
                 

                    <!-- widget -->
                   <el-row class="widget ">
                        <el-col :span="24">
                            <widget></widget>
                        </el-col>
                  </el-row>   
                </div>
            </el-col>

             <!-- 右边新闻 -->
            <el-col :span="4">
               <div  style="background:pink;height:1000px"></div>
            </el-col>
        </el-row>
 
     
    </div>  
</template>

<script>

import widget from "./Widget.vue"

export default {
    name:'shop',
    components: {
        // shopNav,
        widget
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        el-row{
          margin-bottom: 20px;
          &:last-child{
              margin-bottom: 0;
          }
           el-col{
            padding: 0 10px;
           }
        }
       
        background: rgb(247,248,255);

       .widget{
          
           background: #ccecce;
       }
    }
</style>

