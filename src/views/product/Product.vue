<template>
    <div class="product_body">
        <!-- <shopNav></shopNav> -->
        <div class="p_title">
            <span>商品管理</span>
            <i>图标</i>
            <i>?</i>
            <span>帮助和服务>></span>
        </div>
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
.product_body{
    position:fixed;
    left:100px;
    top:0;
    right:0;
    bottom:0;
    background:rgb(247,248,250);
    overflow:scroll;
    .p_title{
        width:100%;
        height: 56px;
        background:whrite;

    }

}
</style>
