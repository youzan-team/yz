<template>
  <div class="table-list">
    <div v-if="user" class="nolist"><i class="el-icon-document"></i><span>暂无相关客户信息 </span></div>
    <div v-else class="list">
      <el-table :data="customer" style="width: 100%" max-height="400" >
        <el-table-column type="selection" width="55" ></el-table-column>
        <el-table-column fixed prop="name" label="客户" width="180"></el-table-column>
        <el-table-column prop="identity" label="会员" width="120"></el-table-column>
        <el-table-column prop="integral" label="积分" sortable width="120" :sort-method="(a,b) => sortMethod(a ,b , 'integral')"></el-table-column>
        <el-table-column prop="balance" label="储值余额" sortable width="120"></el-table-column>
        <el-table-column prop="num" label="购买次数" sortable width="120"></el-table-column>
        <el-table-column prop="money" label="累计消费金额" sortable width="130"></el-table-column>
        <el-table-column prop="last_time" label="上次消费时间" sortable width="130"></el-table-column>
        <el-table-column fixed="right" label="操作" width="200">
          <template slot-scope="scope">
            <el-button  type="text" size="small">设置权益卡</el-button>
            <el-button  type="text" size="small">加标签</el-button>
            <el-button  @click="dele(scope.$index)" type="text" size="small">移除</el-button>
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
                :page-sizes="[3, 4, 5, 6]"
                :page-size="5"
                layout="total, sizes, prev, pager, next, jumper"
                :total="customer2.length">
          </el-pagination>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: "table-list",
  data: function () {
    return {
      user: false,
      value: '',
      checked: false,
      options1: [
        {
          value: '选项1',
          label: '对选中的人加标签'
        },
        {
          value: '选项2',
          label: '对筛选出来的人加标签'
        }
      ],
      options2: [
        {
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
        }
      ],
      options3: [
        {
          value: '选项1',
          label: '对选中的人加标签'
        }, {
          value: '选项2',
          label: '对筛选出来的人加标签'
        }
      ],
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1,
      currentPage4: 1
    }
  },
  mounted: function () {
    this.getCustomer()  //获取客户
  },
  computed: {
    ...mapState('customer', ['customer', 'customer2'])
  },
  methods: {
    ...mapActions('customer', ['getCustomer']),
    ...mapMutations('customer', ['deleCustomer', 'article', 'page']),
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
      this.article(val)
    },
    handleCurrentChange(val) {
      //console.log(`当前页: ${val}`);
      //console.log(val)
      this.page(val)
    },
    dele(index) {   //删除客户
      this.deleCustomer(index)
    },
    sortMethod(obj1, obj2, column) {
      //console.log(obj1, obj2, column)
      var at = Math.floor(obj1[column])
      var bt = Math.floor(obj2[column])
      //console.log(at, bt)

      if (at > bt) {
        return -1
      } else {
        return 1
      }
    },
    aa(column, prop, order){
      console.log(column, prop, order)
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
.el-table_1_column_2 .cell {
  white-space: pre-line; /*保留换行符*/
}
</style>
