<template>
<div class="assistant"> 
    <div class="bottom">
       
        <el-row  class="row-main">
           <el-col :span="6">
            <div class="header">智能助手</div>
            <div  class="main-left">
            <img :src="icons.assistant" alt=""></div></el-col>
           <el-col :span="18">
              <div class="main-right">
                <assistantMain></assistantMain> 
              </div>
           </el-col>
    </el-row>
    </div>
</div>
    
</template>

<script>
import { icons } from '@/assets/index.js'
import assistantMain from './AssistantMain.vue'
export default {
   data:function() {
       return {
           icons,
       }
   },
   components: {
       assistantMain
   }
}
</script>

<style lang="scss" scoped>
    .assistant{
        background: #fff;
        height: 296px;
        padding: 10px;
        .main-left{
           border-right: #efefef 1px solid;
           >img{
               margin: 25px 0 0 25px;
           }
        }
    }

</style>

