<template>
<div>
 <div class="orderList-main">
    <el-table ref="filterTable" :data="orderArrType1" style="width: 100%">
      <el-table-column prop="name" label="商品" width="160"></el-table-column>
      <el-table-column prop="price" label="单价(元)/数量" width="140"></el-table-column>
      <el-table-column prop="custom" label="买家 / 收货人" width="110"></el-table-column>
      <el-table-column prop="mode" label="配送方式" width="100"></el-table-column>
      <el-table-column prop="money" label="实收金额" width="100"></el-table-column>
      <el-table-column prop="status" label="订单状态" width="120"></el-table-column>
      <el-table-column prop="aftersale" label="售后" width="100"></el-table-column>
      <el-table-column prop="operation" label="操作" width="100"></el-table-column>
    </el-table>
  </div>
</div>
</template>
<script>
import { mapActions,mapState,mapMutations } from "vuex";
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  mounted(){
    this.getOrderList()
    console.log(this.orderArrType1)
  },
  computed:{
      ...mapState("order",['orderArrType1']),
      payload(){
        let orderList=this.orderListArr1
        return orderList
      }
    },
 methods: {
    ...mapActions('order',["getOrderList"]),
    ...mapMutations('order',['updateArr','updataList']),
    handleClick(tab, event) {
      console.log(tab, event);
      
    },
  }
};
</script>
<style lang="scss" scoped>
div{
    height: 280px;
.orderList-main {
  padding: 16px;
  padding-top: 0;
  box-sizing: border-box;
  height: 264px;
  overflow: scroll;
}

}