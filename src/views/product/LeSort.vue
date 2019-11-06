<template>
<div class="le_s">
    <el-table :data="tableData" style="width: 100%;" :default-sort="{prop: 'price', order: 'descending'}">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="price" label="商品 价格" sortable width="150">
            <div>测试商品</div>
            <span>1.00</span>
        </el-table-column>
        <el-table-column prop="visit" label="访问量"  sortable width="150">
            <div>访问数</div>
            <div>浏览量</div>
        </el-table-column>
        <el-table-column prop="Stock" label="库存" sortable width="150">
        </el-table-column>
        <el-table-column prop="total " label="销售量" sortable width="150">
        </el-table-column>
        <el-table-column prop="data" label="创建时间" sortable width="150">
        </el-table-column>
        <el-table-column prop="number" label="序号" sortable width="150">
        </el-table-column>
        <el-table-column prop="operation" label="操作" :formatter="formatter" fixed="right">
            <a href="">编辑|推广</a>
        </el-table-column>
    </el-table>
    <div class="le_right">
        <!-- 页码 -->
        <div class="block" style="margin-top:20px;">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                :current-page.sync="currentPage3" :page-size="5" :pager-count="3" background
                layout="total,prev, pager, next, jumper" :total="20">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          price:'1.00',
          visit: '0',
          Stock:"100",
          total:"200",
          data:"2019-11-4",
          name: '王小虎',
          number:"0",
        }, {
          price:'1.00',
          visit: '0',
          Stock:"100",
          total:"200",
          data:"2019-11-4",
          name: '王小虎',
          number:"0",
        }, {
          price:'1.00',
          visit: '0',
          Stock:"100",
          total:"200",
          data:"2019-11-4",
          name: '王小虎',
          number:"0",
        }]
      }
    }
  }
</script>


<style>
.le_right{
    float:right;
}
</style>
