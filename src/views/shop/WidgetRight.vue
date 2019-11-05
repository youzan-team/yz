<template>
    <div>
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">本月目标(元)</div></el-col>
           <el-col :span="12"><div class="grid-content">完成进度(%)</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-lg">
           <el-col :span="12"><div class="grid-content">--</div></el-col>
           <el-col :span="12"><div class="grid-content">--</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">可用店铺余额(元)</div></el-col>
           <el-col :span="12"><div class="grid-content">待结算(元)</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-lg">
           <el-col :span="12"><div class="grid-content">0.00</div></el-col>
           <el-col :span="12"><div class="grid-content">0.00</div></el-col>
        </el-row>
       
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    
    .el-row{
      &:nth-child(2){
          margin-bottom: 20px
      }
  }
  .font-nor{
      font-size: 15px;
      color: #969799;
  }
  .font-lg{
      font-size: 28px; 
      color: #333333;   
  }
  
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height: 36px;
    text-align: center;
    
  }
</style>