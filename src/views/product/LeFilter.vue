<template>
  <div>

      <el-row :gutter="20">
          <el-col :span="8">
              商品名称或编码：
              <el-input v-model="input"></el-input>
          </el-col>
          <el-col :span="8">
              商品分组： 
              <el-select v-model="value">
                 <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
              </el-select>  
          </el-col>
          <el-col :span="8">
              商品类型：
              <el-select v-model="value">
                 <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
              </el-select> 
          </el-col>   
      </el-row>   
      <el-row :gutter="20">
          <el-col :span="8">
              总销量：
              <el-input v-model="input" style="width:90px"></el-input> -
              <el-input v-model="input" style="width:90px"></el-input>
          </el-col>
          <el-col :span="8">
              价格：
              <el-input v-model="input" style="width:90px"></el-input> -
              <el-input v-model="input" style="width:90px"></el-input>
          </el-col>
          <el-col :span="8">
              库存扣减方式：
              <el-select v-model="value">
                 <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                 </el-option>
              </el-select> 
          </el-col>
      </el-row>
      <el-row :gutter="20" type="flex">
          <el-col :span="2"><div class="grid-content"></div></el-col>
          <el-col :span="20">
              <div class="le_btn">
                <el-button type="primary">主要按钮</el-button>
                <el-button plain>朴素按钮</el-button>
                <el-button type="text">查看已生成报表</el-button>
                <el-button type="text">清空筛选条件</el-button>
              </div>

          </el-col>
          <el-col :span="2"><div class="grid-content"></div></el-col>
      </el-row>      
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      input: '',
      options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '其它'
        }, {
          value: '选项3',
          label: '列表隐藏'
        }, {
          value: '选项4',
          label: '最热商品'
        }, {
          value: '选项5',
          label: '最新商品'
        }],
      
    }
  }
}
</script>

<style lang="scss" scoped>
.el-input{
  width:200px;
}
.le_btn{
  float:left;
}
///////////
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
