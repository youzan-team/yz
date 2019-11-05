<template>
    <el-row>
        <el-col :span="24">
            <div class="grid-content bg-purple-light" style="height: 800px; border: 1px solid #eee">
                <!-- 头部 -->
                <el-row type="flex" align="middle" style="background:white;height:57px;    border:1px solid black;">
                    <el-col :span="3">商品管理</el-col>
                    <el-col :span="18"></el-col>
                    <el-col :span="3">
                        <i class="el-icon-edit"></i>
                        帮助和服务
                    </el-col>
                </el-row>
                <!-- 身体 -->
                <div class="le_body">
                    <!-- 警告 -->
                    <div class="le_warn">
                        <span>
                            <i class="fa fa-home fa-fw"></i>
                            为了营造绿色健康的购物环境，更好地保障消费者利益，我们将于2019年10月31  日起下线“跳转到其他网站购买”功能。
                        </span>
                        <a href="">查看详情</a>
                    </div>
                    <!-- 导航栏 -->
                    <LeNav style="margin:10px;"></LeNav>
                    <!-- 筛选栏 -->
                    <div class="le_filter">
                        <LeFilter></LeFilter>
                    </div>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import LeNav from "./LeNav.vue"
import LeFilter from "./LeFilter.vue"



export default {
    components:{
        LeNav,
        LeFilter,
    }
}
</script>

<style lang="scss" scoped>

// 身体
.le_body{
    background:white;
    padding:5px;
    margin:10px;
    // 警告
    .le_warn{
        border:1px solid red;
        background:pink;
        height:50px;
        line-height:50px;
        margin:10px;
        span{
            float:left;
            margin-left:10px;
        }
        a{
            float:right;
            margin-right:10px;
        }
    }
    // 筛选
    .le_filter{
        margin:20px;
    }
}



///////////////////////
  .el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
