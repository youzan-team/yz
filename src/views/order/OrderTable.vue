<template>
  <div class="orderTable">
    <!-- 表格导航 -->
    <div class="orderList-nav">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <!-- 第一个 -->
        <el-tab-pane label="全部" name="全部">
          <order1></order1>
        </el-tab-pane>
        <!-- 第二个 -->
        <el-tab-pane label="待付款" name="待付款">
          <order2></order2>
        </el-tab-pane>
        <el-tab-pane label="待发货" name="待发货"></el-tab-pane>
        <el-tab-pane label="已发货" name="已发货"></el-tab-pane>
        <el-tab-pane label="已完成" name="已完成"></el-tab-pane>
        <el-tab-pane label="已关闭" name="已关闭"></el-tab-pane>
        <el-tab-pane label="退货中" name="退货中"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 分页 -->
    <el-row>
      <el-col :span="14" :offset="10">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[3, 6, 9]"
            :page-size="this.a"
            layout="total, sizes, prev, pager, next, jumper"
            :total="this.pages"
          ></el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import order1 from "./order1.vue";
import order2 from "./order2.vue";
import { mapMutations,mapState } from "vuex";
export default {
  data() {
    return {
      activeName: "全部",
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1,
      page1:0
    };
  },
  components: {
    order1,
    order2
  },
  computed:{
    ...mapState("order",['orderListArr2','orderListArr1','a','pages']),
    
  },
  methods: {
    ...mapMutations("order", ["page", "aa","updataList2","updatepages"]),

    handleClick(tab) {
      if(tab.index=="1"){
        this.updataList2()
        // this.aa(this.page1)
      }
      if(tab.index=="0"){
        this.updatepages()
      }
    },
    // 分页
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.page1=val
      this.aa(val);    
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.page(val);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
