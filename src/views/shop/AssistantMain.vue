<template>
    <div class="assistantMain">
        <el-row>
          <el-col :span="3"><div class="grid-content bg-purple">全部事项</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">店铺基础</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">商品体验</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">物流体验</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">售后体验</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">服务体验</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple">流量体现</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="21"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.assistantMain{
    margin:20px 40px 0;
    .el-row {
    margin-bottom:20px ;
    &:first-child {
       text-align: center;
       line-height: 36px;
       font-size: 15px;
       color: #646566;
       .el-col{
           border:#efefef 1px solid;
       }
    } 
    &:last-child {
         height: 250px;
    }
    
  }
  .on{
      color:#323233;
      background: #fff;
  }
  .bg-purple {
    background: #efffef;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
  }
}
</style>

