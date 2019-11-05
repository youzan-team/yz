<template>
    <el-row>
        <el-col :span="24">
            <div class="head">
               <span>过早</span>
               <span>试用期</span>
               <span>SVIP</span>
               <span>有赞担保</span>
               <div class="fa fa-user-circle-o" >17774949446 <span class="fa fa-angle-right"></span></div> 
            </div>
        </el-col>
    </el-row> 
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.head{
    height:56px;
    line-height: 56px;
    background:#fff;
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
        border:  #efefef 1px solid;
        
       } 
      &:nth-child(4){
        color: #323233;
        font-size: 15px;
        display: inline-block;
        border: #efefef 1px solid;  
       }  

    }
    >div{
        padding: 2px 4px;
        margin: 0 0 0 5px;
        color: #323233;
        font-size: 15px;
        float: right ;
    }
}       
</style>

