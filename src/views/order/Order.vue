<template>
   <div class="order-wrap">
    <el-row>
      <el-col :span="2"><div  style="background:green;height:1000px"></div></el-col>
      <el-col :span="18">
        <div  style="background:red;height:1000px">
          <div class="header">
            <span>订单查询</span>
          </div>
          <div class="order-count">
            <div class="order-find">
              <!-- 表单 -->
              <div class="order-findCount"> 

              </div>


              <!-- 表格导航 -->
              <div class="orderList-nav">
                 <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="全部" name="first">全部</el-tab-pane>
                  <el-tab-pane label="待付款" name="second">待付款</el-tab-pane>
                  <el-tab-pane label="待发货" name="third">待发货</el-tab-pane>
                  <el-tab-pane label="已发货" name="fourth">已发货</el-tab-pane>
                  <el-tab-pane label="已完成" name="fifth">已完成</el-tab-pane>
                  <el-tab-pane label="已关闭" name="sixth">已关闭</el-tab-pane>
                  <el-tab-pane label="退货中" name="seventh">退货中</el-tab-pane>
                </el-tabs>
              </div>

            <!-- 表格主体 -->
              <div class="orderList-main">
                
                  
                
                    <el-table
                      ref="filterTable"
                      :data="tableData"
                      style="width: 100%">
                     
                      <el-table-column
                        prop="date"
                        label="日期"
                        sortable
                        width="180"
                        column-key="date"
                        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                        :filter-method="filterHandler"
                      >
                      </el-table-column>
                      <el-table-column
                        prop="name"
                        label="姓名"
                        width="180">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="地址"
                        :formatter="formatter">
                      </el-table-column>
                  
                      <el-table-column
                        prop="tag"
                        label="标签"
                        width="100"
                        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
                        :filter-method="filterTag"
                        filter-placement="bottom-end">
                        <template slot-scope="scope">
                          <el-tag
                            :type="scope.row.tag === '家' ? 'primary' : 'success'"
                            disable-transitions>{{scope.row.tag}}</el-tag>
                        </template>
                      </el-table-column>
                    </el-table>


              </div>




            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4"><div  style="background:pink;height:1000px"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, ) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      
    }
    }
  };
</script>

<style lang="scss" scoped>
.order-wrap{
  font-size: 14px;
  .header{
    height: 56px;
    width: 100%;
    background: white;
    box-sizing: border-box;
    padding: 20px;
    border: 1px solid #999999;
    span{
      display: inline-block;
      height: 100%;
    }
  }
  .order-count{
    min-height: 726px;
    background: #f7f8fa;
    padding: 16px;
    box-sizing: border-box;
    .order-find{
      background: white;
      width: 100%;
      height: 710px;
      padding: 16px;
      box-sizing: border-box;
      .order-findCount{
        min-height: 304px;
        background: #f7f8fa;
        padding: 16px;
        margin-bottom: 16px;
      }
     
    }
  }
}

</style>
