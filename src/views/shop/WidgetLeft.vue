<template>
    <div class="widgetLeft">
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">支付订单数</div></el-col>
           <el-col :span="12"><div class="grid-content">支付金额</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-lg">
           <el-col :span="12"><div class="grid-content">0</div></el-col>
           <el-col :span="12"><div class="grid-content">0.00</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">昨日：0</div></el-col>
           <el-col :span="12"><div class="grid-content">昨日：0.00</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">浏览量</div></el-col>
           <el-col :span="12"><div class="grid-content">累计</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-lg">
           <el-col :span="12"><div class="grid-content">1</div></el-col>
           <el-col :span="12"><div class="grid-content">0</div></el-col>
        </el-row>
        <el-row :gutter="20" class="font-nor">
           <el-col :span="12"><div class="grid-content">昨日：8</div></el-col>
           <el-col :span="12"><div class="grid-content"></div></el-col>
        </el-row>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .el-row{
      &:nth-child(3){
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

