<template>
<div class="main2">
 <div class="main-box">
   <div class="desc" v-for='(val, idx) in tableData' :key="idx">
      <img :src="icons.flag_src" alt="">
      <span v-text="val.desc">未填写客服电话</span>
      <span v-text="val.subDesc">填写后，可以帮助买家快速联系到您</span>
      <span v-text="val.event">立即优化</span>
   </div>
 </div>

 </div>
    
</template>

<script>
import { icons } from "@/assets/index.js";
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      icons
    };
  },
  computed: {
    ...mapState("shop", ["tableData"])
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    ...mapActions("shop", ["getTableData"])
  }
};
</script>

<style lang="scss" scoped>
.main2 {
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
</style>


