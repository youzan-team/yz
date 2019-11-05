<template>
    <div class="shop">
      <el-row>
            <!-- 左边导航 -->
           <el-col :span="2" style="margin-right:20px">
              <shopNav></shopNav>
            </el-col>

             <!-- 中间内容 -->
            <el-col :span="18">
               <div  style="height:1000px">

                   <!-- head -->
                  <el-row>
                     <el-col :span="24">
                        <div style="" class="head">
                           <span>过早</span>
                           <span>试用期</span>
                           <span>SVIP</span>
                           <span>有赞担保</span>
                        </div>
                      </el-col>
                   </el-row> 

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
import shopNav from "@/components/ShopNav.vue"
import widget from "./Widget.vue"

export default {
    name:'shop',
    components: {
        shopNav,
        widget
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        background: rgb(247,248,255);
       .head{
           height:56px;
           line-height: 56px;
           background:#fff;
           padding-left: 20px;
           span{
               height: 15px;
               line-height: 15px;
               padding: 2px 4px;
               margin: 0 0 0 5px;
               border-radius: 4px;
             &:nth-child(1){
               color: #323233;
               font-size: 20px;
             }
             &:nth-child(2){
               color: #155bd4;
               font-size: 15px;
               display: inline-block;
               border: 1px solid #155bd4;
              }
             &:nth-child(3){
               color: #323233;
               font-size: 15px;
               display: inline-block;
               border: 1px solid #323233;
               
              } 
             &:nth-child(4){
               color: #323233;
               font-size: 15px;
               display: inline-block;
               border: 1px solid #323233;   
              }  

           }
           
       }
       .widget{
          
           background: #ccecce;
       }
    }
</style>

