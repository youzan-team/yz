<template>
<div class="le_s">
    <el-table 
    :data="productArr2" 
    style="width: 100%;" 
    @selection-change="handleSelectionChange"
    :default-sort="{prop: 'data', order: 'descending'}"
    >
        <el-table-column type="selection" width="55">
        </el-table-column>
        <!-- 商品 价格 price -->
        <el-table-column
        prop=""
        label="商品"
        width="70">
        </el-table-column>
        <el-table-column
        prop="price"
        label="价格"
        sortable
        width="180">
        </el-table-column>
        <!-- 访问量 visit -->
        <el-table-column 
        prop="visit" 
        label="访问量"  
        sortable width="150">
            <!-- <div>访问数</div> -->
            <!-- <div>浏览量</div> -->
        </el-table-column>
        <!-- 库存 Stock -->
        <el-table-column 
        prop="Stock" 
        label="库存" 
        sortable width="150">
            <div>100</div>
        </el-table-column>
        <!-- 总销售 total -->
        <el-table-column 
        prop="total " 
        label="总销售" 
        sortable width="150">
        </el-table-column>
        <!-- 创建时间 data -->
        <el-table-column 
        prop="data" 
        label="创建时间" 
        sortable width="150">
            <div>2019.12.3</div>
        </el-table-column>
        <!-- 序号 number -->
        <el-table-column 
        prop="num" 
        label="序号" 
        sortable width="150">
        </el-table-column>
        <!-- 操作 operation -->
        <el-table-column 
        prop="operation" 
        label="操作" 
        fixed="right">
            <a href="">编辑|推广</a>
        </el-table-column>
    </el-table>
    <!-- 增删改查 -->
    <div class="le_delect">
        <el-row>
            <el-button plain>改分组</el-button>
            <el-button plain>下架</el-button>
            <el-button plain @click="delClick">删除</el-button>
            <el-button plain>批量设置</el-button>
        </el-row>
    </div>
    <!-- 页码 -->
    <div class="le_right">
        <div class="block" style="margin-top:20px;">
            <el-pagination 
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :page-size="5" 
                background
                layout="total,prev, pager, next, jumper" :total="20">
            </el-pagination>
        </div>
    </div>
</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"

  export default {
    computed:{
        ...mapState('product',["productArr"]),
        ...mapState('product',["productArr2"]),
    },
    mounted(){
        this.getProduct()

    },
    methods:{
        ...mapActions('product',["getProduct"]),
        ...mapMutations('product',["updateProductArr"]),
        ...mapMutations('product',["updateDelect"]),

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.updateProductArr({page:val})
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
        },
        delClick(){
            console.log(3)
            this.updateDelect(this.multipleSelection)
        }
    },

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
        }]
      }
    }
  }
</script>


<style>
.le_tu{
    float:left;
    height:90px;
    width:90px;
    padding:10px;
}
.le_delect{
    float:left;
    margin-left:60px;
    margin-top: 20px;
}
.le_right{
    float:right;
}
</style>
