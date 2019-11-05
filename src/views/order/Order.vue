<template>
   <div class="order-wrap">
    <el-row>
      <el-col :span="1"><div  style="background:#f7f8fa;height:796px"></div></el-col>
      <el-col :span="20">
        <div  style="height:726px">
          <OrderHeader></OrderHeader>
          <div class="order-count">
            <div class="order-find">
              <!-- 表单 -->
              <OrderFrom></OrderFrom>
              <!-- 表格导航 -->
              <OrderTable></OrderTable>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="3"><div  style="background:#f7f8fa;height:796px"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import OrderHeader from './OrderHeader.vue'
import OrderFrom from './OrderFrom.vue'
import OrderTable from './OrderTable.vue'

export default {
  components:{
    OrderHeader,
    OrderFrom,
    OrderTable
  }  
}
</script>

<style lang="scss" scoped>
.order-wrap{
  font-size: 14px;
  box-sizing: border-box; 
  .order-count{
    min-height: 750px;
    background: #f7f8fa;
    padding: 16px;
    box-sizing: border-box;
    .order-find{
      background: white;
      width: 100%;
      min-height: 710px;
      padding: 16px;
      box-sizing: border-box;    
    }
  }
}

</style>
