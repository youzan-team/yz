<template>
    <div class="shop" >
        <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <widget></widget>
                </div></el-col>
                <el-col :span="6">
                <div class="grid-content ">
                    <img :src="icons.ad_src" alt="" style="width:270px">
                    <div class="news-box">
                     <news1></news1>
                    </div>
                </div></el-col>
        </el-row>
         <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <assitant></assitant>
                </div></el-col>
                <el-col :span="6">
                <div class="grid-content ">
                      <news2></news2>
                      <news3></news3>
                </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <feature></feature>
                </div></el-col>
                 <el-col :span="6">
                <div class="grid-content ">
                      <news3></news3>
                </div></el-col>
        </el-row>
    </div>  
</template>

<script>

import widget from "./Widget.vue"
import assitant from "./Assistant.vue"
import feature from "./Feature.vue"
import { icons } from "@/assets/index.js"
import news1 from "./News1.vue"
import news2 from "./News2.vue"
import news3 from "./News3.vue"
export default {
    name:'shop',
    data:function(){
        return{
            icons
        }
    },
    components:{   
        widget,
        assitant,
        feature,
        news1,
        news2,
        news3,
    }
}
</script>

<style lang="scss" scoped>
    .shop{
        .el-row {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .el-col {
            border-radius: 4px;
            
        }
        
        .grid-content {
            border-radius: 4px;
            min-height: 36px;
        }
        .row-bg {
            padding: 10px 0;
            // background-color: #f9fafc;
        }
    }
  
        
  
       
   
</style>

