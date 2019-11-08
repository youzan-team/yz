<template>
<div class="widget">
  <el-row  class="row-header">
    <el-col :span="24">    
      <span>实时概况</span>
      <span>更新时间:<span v-text="moment">2019-11-05 15:33:17</span></span>
      <span class="fa fa-cog"></span>
      <span>编辑</span>
    </el-col>
  </el-row>
  <!-- 动态组件 -->
   <el-row  class="row-main">
      <el-col :span="12">
        <div class="widge-line">
          <widgetLeft></widgetLeft>
        </div>
      </el-col>
     <el-col :span="12"><div class=""><widgetRight></widgetRight></div></el-col>
  </el-row>
</div>  
</template>

<script>
import moment from "moment";
import widgetLeft from "./WidgetLeft.vue";
import widgetRight from "./WidgetRight.vue";
// import { setInterval } from 'timers';
export default {
  name: "widget",
  data() {
    return {
      moment: moment().format("YYYY-MM-DD HH:mm:ss")
    }
  },
  components: {
    widgetLeft,
    widgetRight
  },
  // methods:{
  //   fn(){
  //     setInterval(function(){
  //       let a=moment().format("YYYY-MM-DD HH:mm:ss")
  //       console.log(a)
  //       this.moment=a
  //     },1000)
  //   }
  // },
  // mounted(){
  //   this.fn()
  // }
}
</script>

<style lang="scss" scoped>
.widget {
  background: #fff;
  height: 290px;
  padding-bottom: 20px;
  > .row-header {
    height: 24px;
    line-height: 24px;
    padding: 10px 20px 0 10px;
    margin-bottom: 20px;
    span {
      &:nth-child(1) {
        color: #323233;
        font-size: 16px;
        margin-right: 5px;
      }
      &:nth-child(2),
      &:nth-child(2) span,
      &:nth-child(3) {
        font-size: 15px;
        color: #969799;
      }
      &:nth-child(4) {
        font-size: 15px;
        float: right;
        color: #155bd4;
      }
    }
  }
  > .row-main {
    .widge-line {
      border-right: #efefef 1px solid;
    }
  }
}
</style>

