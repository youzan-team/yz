<template>
<div class="widget">
    <el-row  class="row-header">
        <el-col :span="12">
            <div class="">
                <span>实时概况</span>
                <span>更新时间:<span>2019-11-05 15:33:17</span></span>
                <span class="fa fa-cog"></span>
                <span>编辑</span>
            </div>
        </el-col>
    </el-row>

   <el-row  class="row-main">
        <el-col :span="12"><div class=""><widgetLeft></widgetLeft></div></el-col>
        <el-col :span="12"><div class=""><widgetRight></widgetRight></div></el-col>
    </el-row>

</div>
    
</template>

<script>
import widgetLeft from './WidgetLeft.vue'
import widgetRight from './WidgetRight.vue'
export default { 
    name:'widget',
    components:{
        widgetLeft,
        widgetRight 
    }

}
</script>

<style lang="scss" scoped>
    .widget{
         height: 280px;
         >.row-header{
            height: 24px; 
            // background: #fff;
            margin-bottom:20px ;
            span{ 
                &:nth-child(1){
                    color: #323233;
                    font-size: 16px;
                    margin-right:5px;
                }
                &:nth-child(2),
                &:nth-child(2) span,
                &:nth-child(3){
                    font-size: 15px;
                    color: #969799;
                }
                &:nth-child(4) {
                    font-size: 15px;
                    float: right;
                    color: #155bd4;
                }
            }
         }
         >.row-main{
             background: #fff;
         }
    }
</style>

