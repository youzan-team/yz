<template>
  <div class="orderTable">
    <!-- 表格导航 -->
    <div class="orderList-nav">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="全部" name="全部"></el-tab-pane>
        <el-tab-pane label="待付款" name="待付款"></el-tab-pane>
        <el-tab-pane label="待发货" name="待发货"></el-tab-pane>
        <el-tab-pane label="已发货" name="已发货"></el-tab-pane>
        <el-tab-pane label="已完成" name="已完成"></el-tab-pane>
        <el-tab-pane label="已关闭" name="已关闭"></el-tab-pane>
        <el-tab-pane label="退货中" name="退货中"></el-tab-pane>
      </el-tabs>
    </div>
    <!-- 表格主体 -->
    <div class="orderList-main">
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="姓名" width="80"></el-table-column>
        <el-table-column prop="price" label="单价(元)/数量" width="150" ></el-table-column>
         <el-table-column prop="price" label="买家 / 收货人" width="150" ></el-table-column>
         <el-table-column prop="price" label="配送方式" width="100" ></el-table-column>
         <el-table-column prop="price" label="实收金额" width="100" ></el-table-column>
         <el-table-column prop="price" label="订单状态" width="150" ></el-table-column>
        <el-table-column prop="address" label="售后" width="100" ></el-table-column>

        <el-table-column prop="tag" label="标签"  width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions
            >{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
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
          :page-size="1"
          layout="total, sizes, prev, pager, next, jumper"
          :total="9">
        </el-pagination>
    </div>
      </el-col>
    

    </el-row>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          price: "1130/1",
          name: "毛衣链",
          address: "保修",
          tag: "家"
        },
        {
          price: "1130/1",
          name: "毛衣链",
          address: "保修",
          tag: "公司"
        },
        {
          price: "1130/1",
          name: "毛衣链",
          address: "保修",
          tag: "家"
        },
        {
          price: "1130/1",
          name: "毛衣链",
          address: "保修",
          tag: "家"
        },
        {
          price: "1130/1",
          name: "毛衣链",
          address: "保修",
          tag: "家"
        }
      ],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },

// 分页
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }


};
</script>

<style lang="scss" scoped>
.orderTable{
.orderList-main {
  padding: 16px;
  padding-top: 0;
  box-sizing: border-box;
  height: 264px;
  overflow: scroll;
}
}

</style>
