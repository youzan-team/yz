<template>
<div>
    <div class="col-con">
        <span class="bang"></span>
        <router-link tag='div' to='./shop'>店铺</router-link>
        <router-link tag='div' to='./product'>商品</router-link>
        <router-link tag='div' to='./order'>订单</router-link>
        <router-link tag='div' to='./customer'>客户</router-link>   
    </div>
     
    
</div> 
 
</template>
<script>
export default {

}
</script>

<style lang='scss' scoped>
.col-con{
   height:1000px ;
   background-color: #444444;
    color: #c8c9cc;
    text-align: center;
   
   >div{
        height: 40px;
        line-height: 40px;
    }
}
</style>

