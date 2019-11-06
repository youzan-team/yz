<template>
    <div class="shop" >
        <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <widget></widget>
                </div></el-col>
        </el-row>
         <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <assitant></assitant>
                </div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="18">
                <div class="grid-content bg-purple">
                     <feature></feature>
                </div></el-col>
        </el-row>
    </div>  
</template>

<script>

import widget from "./Widget.vue"
import assitant from "./Assistant.vue"
import feature from "./Feature.vue"

export default {
    name:'shop',
    components: {   
        widget,
        assitant,
        feature
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
        .bg-purple {
           
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

