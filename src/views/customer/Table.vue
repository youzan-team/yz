<template>
  <div class="table-list">
    <div v-if="user" class="nolist"><i class="el-icon-document"></i><span>暂无相关客户信息 </span></div>
    <div v-else class="list">
      <el-table :data="tableData" style="width: 100%" max-height="400">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="date" label="客户" width="180"></el-table-column>
        <el-table-column prop="name" label="权益卡" width="120"></el-table-column>
        <el-table-column prop="province" label="积分" sortable width="120"></el-table-column>
        <el-table-column prop="city" label="储值余额" sortable width="120"></el-table-column>
        <el-table-column prop="address" label="购买次数" sortable width="120"></el-table-column>
        <el-table-column prop="zip" label="累计消费金额" sortable width="120"></el-table-column>
        <el-table-column prop="zip" label="上次消费时间" sortable width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">设置权益卡</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">加标签</el-button>
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "table-list",
  data: function () {
    return {
      user: false,
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
        {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
        {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, 
        {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }
      ]
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
}
</script>

<style lang="scss" scoped>
.table-list {
  width: 100%;
  height: 500px;
  background: #f7f8fa; //#f7f8fa
  margin-top: 20px;
  .nolist {
    text-align: center;
    i {
      display: inline-block;
      margin-top: 100px;
      font-size: 30px;
    }
    span {
      display: block;
    }
  }
  .list{
    height: 400px
  }
}
</style>
