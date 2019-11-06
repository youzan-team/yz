<template>
    <div class="feature">
         <el-row :gutter="20">
            <el-col :span="24"> 
             <div class="grid-content bg-purple">
                <span>常用功能</span>
                <span>编辑</span>
              </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"><i class="fa fa-flag"></i> 发布产品</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-compass"></i> 分销员</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-crosshairs"></i> 多网点</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-dashboard"></i> 小程序</div></el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-flag"></i> 微信公众号</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-free-code-camp"></i> 收入提现</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-gg-circle"></i> 智能客服</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple"> <i class="fa fa-github-alt"></i> 订单查询</div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>
  
 <style lang="scss" scoped>


.feature{
  padding: 20px;
  font-size: 12px;
  background: #fff;
}
    .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    i{
      font-size: 30px;
      color: #2d18cf;

    }
  }
  
  .bg-purple {
    span:last-child{
      color: #2d18cf;
      float: right;
    }
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
</style>

