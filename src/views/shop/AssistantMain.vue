<template>
    <div class="assistantMain">
        <el-row>
          <el-col :span="3"><div @click = "tapClick('main1')"  class="grid-content bg-purple" :class="{'on':who=='main1'}">全部事项</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main2')" class="grid-content bg-purple" :class="{'on':who=='main2'}">店铺基础</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main3')" class="grid-content bg-purple" :class="{'on':who=='main3'}">商品体验</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main4')" class="grid-content bg-purple" :class="{'on':who=='main4'}">物流体验</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main5')" class="grid-content bg-purple" :class="{'on':who=='main5'}">售后体验</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main6')" class="grid-content bg-purple" :class="{'on':who=='main6'}">服务体验</div></el-col>
          <el-col :span="3"><div @click = "tapClick('main7')" class="grid-content bg-purple" :class="{'on':who=='main7'}">流量体现</div></el-col>
        </el-row>
        <el-row>
          <el-col :span="21">
              <div class="grid-content bg-purple">
                 <keep-alive> <component :is='who'>1</component></keep-alive>
              
              </div></el-col>
        </el-row>
    </div>
</template>

<script>
import main1 from './main/Main1.vue'
import main2 from './main/Main2.vue'
import main3 from './main/Main3.vue'
import main4 from './main/Main4.vue'
import main5 from './main/Main5.vue'
import main6 from './main/Main6.vue'
import main7 from './main/Main7.vue'
export default {
    data: function(){
        return{
            who:'main1'
        }
    },
    components: {
        main1, main2, main3, main4, main5, main6, main7 
	},
	methods: {
	tapClick: function (type) {
    this.who = type; 
    }
	},

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
       font-size: 12px;
       color: #646566;
    } 
    &:last-child {
         height: 250px;
    }
    
  }
  .on{
      color:#df4545;
      
      
  }
  .bg-purple {
    background: #fff;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 25px;
    border:#efefef 1px solid;
  }
  .row-bg {
    padding: 10px 0;
  }
}
</style>

