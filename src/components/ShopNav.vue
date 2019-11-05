<template>
<div>
    <div class="col-con">
        <div class="bang"><img :src="icons.bang_icon" alt=""></div>
        <router-link activeClass='on' tag='div' to='./shop' class="fa fa-institution">店铺</router-link>
        <router-link activeClass='on' tag='div' to='./product' class="fa fa-map-o">商品</router-link>
        <router-link activeClass='on' tag='div' to='./order' class="fa fa-list-alt">订单</router-link>
        <router-link activeClass='on' tag='div' to='./customer' class="fa fa-user-o">客户</router-link>  
        
    </div>
   
</div> 
 
</template>
<script>
import { icons } from '@/assets/index.js'
export default {
   data: function() {
       return{
          icons
       }
   }
}
</script>

<style lang='scss' scoped>
.col-con{
   height:1000px ;
   background-color: #444444;
    color: #c8c9cc;
    text-align: center;
   >.bang{
       height: 56px;
       padding-top: 20px;
       width: 92px;
       img{
           width: 32px;
           height: 32px;
           border-radius: 50%;
       }
   }
   >div{
        height: 40px;
        width: 92px;
        line-height: 40px;
    }
    .on{
        background: #fff;
        color:#333333;
    }
}
</style>

