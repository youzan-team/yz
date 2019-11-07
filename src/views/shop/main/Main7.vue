<template>
<div class="main3">
   <div class="desc" >
      <img :src="icons.flag_src" alt="">
      <span >未创建客户分群</span>
      <span >通过对客户行为、属性的分析，更好的针对不同客户进行运营管理</span>
      <span >立即创建</span>
   </div>
   <div class="desc" >
      <img :src="icons.flag_src" alt="">
      <span >未设置会员等级</span>
      <span >建立完善的会员成长体系，帮助您更好的维护客户关系及活跃度</span>
      <span >立即设置</span>
   </div>
 </div>
</template>

<script>
import { icons } from "@/assets/index.js";

export default {
  data() {
    return {
      icons
    };
  },
 
}
</script>

<style lang="scss" scoped>
.main3 {
  height: 220px;
  min-width: 500px;
  overflow: auto;
  .desc {
    padding:5px 15px;
     img {
          width: 12px;
          height: 12px;
          margin-right: 15px;
        }
    span {
      font-size: 12px;
      display: inline-block;
      
    
      &:nth-child(3) {
        color: #969799;
      }
      &:nth-child(4) {
          float: right;
          color: #155bd4;
      } 
    }
  }
}
</style>>




