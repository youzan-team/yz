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
      <div class="paging">
        <el-checkbox v-model="checked">当页全选</el-checkbox>
        <div class="paging1">
          <el-select v-model="value" placeholder="加标签">
            <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="paging1">
          <el-select v-model="value" placeholder="给积分">
            <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="paging1">
          <el-select v-model="value" placeholder="更多">
            <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="paging2">
          <el-row>
            <el-col :span="14" :offset="10">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" 
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
          </el-pagination>
            </el-col>
          </el-row>
        </div>
      </div>
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
      ],
      value:'',
      checked: true,
      options1: [{
        value: '选项1',
        label: '对选中的人加标签'
      }, {
        value: '选项2',
        label: '对筛选出来的人加标签'
      }],
      options2: [{
        value: '选项1',
        label: '对选中的人给积分'
      }, {
        value: '选项2',
        label: '对筛选出来的人给积分'
      }, {
        value: '选项3',
        label: '对选中的人清空积分'
      }, {
        value: '选项4',
        label: '对筛选出来的人清空积分'
      }],
      options3: [{
        value: '选项1',
        label: '对选中的人加标签'
      }, {
        value: '选项2',
        label: '对筛选出来的人加标签'
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
  .list {
    height: 400px;
  }
  .paging {
    height: 32px;
    margin-top: 10px;
    .paging1 {
      width: 90px;
      display: inline-block;
      margin-left: 5px;
    }
    .paging2 {
    }
  }
}
</style>
