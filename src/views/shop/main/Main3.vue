<template>
<div class="main3">
   <div class="desc" >
      <img :src="icons.flag_src" alt="">
      <span >分销市场补充货源</span>
      <span >丰富商品品类可更好的拓展获客渠道</span>
      <span >立即选货</span>
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


