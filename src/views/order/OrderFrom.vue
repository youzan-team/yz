<template>
 <div class="order-findCount"> 
   <!-- 第一行 -->
  <el-row align="middle"  type="flex" class="order-FromRow">
    <el-col :span="2" >
      <span>订单搜索：</span>
      </el-col>
    <el-col :span="6">
      <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option  v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-col>
    <el-col :span="5">
      <el-input v-model="input" size="small"></el-input>
    </el-col>
</el-row>

<!-- 第二行 -->
<el-row align="middle" type="flex" class="order-FromRow">
  <el-col :span="2">下单时间：</el-col>
  <el-col :span="5">
    <div class="block">
      <el-date-picker size="small" v-model="value1" type="date" placeholder="开始日期"> </el-date-picker>
    </div>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="1">至</el-col>
  <el-col :span="5">
    <div class="block">
      <el-date-picker size="small" v-model="value2" type="date" placeholder="结束日期"> </el-date-picker>
    </div>
  </el-col>
</el-row>
<!-- 第三行 -->
<el-row align="middle" type="flex" class="order-FromRow">
  <el-col :span="2">商品名称：</el-col>
  <el-col :span="5">
    <el-input v-model="input" placeholder="请输入" size="small"></el-input>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="2">订单类型：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="2">维权状态：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
</el-row>
<!-- 第四行 -->
<el-row align="middle" type="flex" class="order-FromRow">
  <el-col :span="2">维权状态：</el-col>
    <el-col :span="5">
      <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="2">维权状态：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="2">维权状态：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
</el-row>
<!-- 第五行 -->
<el-row align="middle" type="flex" class="order-FromRow">
  <el-col :span="2">维权状态：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
  <el-col :span="1"></el-col>
  <el-col :span="2">维权状态：</el-col>
  <el-col :span="5">
    <el-select v-model="value" placeholder="请选择" no-data-text="订单号" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </el-col>
</el-row>
<!-- 第六行 -->
<el-row align="middle" type="flex" class="order-FromRow">
  <el-col :span="2"></el-col>
  <el-col :span="1"><el-button  type="primary" size="medium">筛选</el-button></el-col>
  <el-col :span="1"></el-col>
  <el-col :span="1"> <el-button plain size="medium">导出</el-button></el-col>
</el-row>
</div>
</template>

<script>

export default {
 data() {
      return {
         input: '',
         input1: '',
         value1: '',
        value2: '',
         pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }          
          },
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
}
</script>

<style lang="scss" scoped>
.order-findCount{
        width: 96%;
        min-height: 304px;
        background: #f7f8fa;
        padding: 16px;
        margin-bottom: 16px;
        .order-FromRow{
          min-height: 50px;
        }
      }
</style>
