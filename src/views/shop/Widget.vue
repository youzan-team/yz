<template>
<div class="widget">
    <el-row  class="row-header">
        <el-col :span="12"><div class="">实时概况</div></el-col>
    </el-row>

   <el-row  class="row-main">
        <el-col :span="12"><div class="">2</div></el-col>
        <el-col :span="12"><div class="">23</div></el-col>
    </el-row>

</div>
    
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .widget{
         height: 280px;
         >.row-header{
            background: #efccce;
         }
         >.row-main{
             background: #0fce0f;
         }
    }
</style>

