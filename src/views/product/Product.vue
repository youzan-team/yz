<template>
  <div>
    <el-row>
        <el-col :span="2">
            <div style="background:green;height:700px"></div>
            </el-col>
        <el-col :span="18"  style="background:rgb(255,255,255);height:700px">
            <!-- 头部 -->
            <div class="le_top">
                <span>商品管理</span>

                <a href="">帮助和服务</a>
            </div>
            <!-- 身体 -->
            <div class="le_main">
                <div class="le_warn">
                    <span>为了营造绿色健康的购物环境，更好地保障消费者利益，我们将于2019年10月31日起下线“跳转到其他网站购买”功能。</span>
                    <a href="">查看详情</a>
                </div>
            </div>
            <!-- 尾部 -->
            <div class="bottom">

            </div>
        </el-col>
        <el-col :span="4">
            <div style="background:red;height:700px"></div>
        </el-col>
    </el-row>
  </div>
    
</template>

<script>
// import shopNav from "@/components/ShopNav.vue"
export default {
    name:'shopNav',
    components: {
        // shopNav
    }
}
</script>

<style lang="scss" scoped>
// 头部
.le_top{
    width:100%;
    height:60px;
    background:yellow;
    span{
        display:block;
        float:left;
        margin:20px;
    }
    a{
        float: right;
        margin:20px;
    }
}
// 中间
.le_main{
    width:100%;
    height:660px;
    background:paleturquoise;
    margin:16px;
    padding:16px;
    .le_warn{
        width:93%;
        height:30px;
        background:pink;
        border:1px solid red;
        line-height:30px;
        >span{
            // width:500px;
            height:40px;
            // background: gold;
            float: left;
        }
        >a{
            float: right;
        }
    }
}
// 尾部
.bottom{
    width:100%;
    height:40px;
    background:orchid;
}


</style>

