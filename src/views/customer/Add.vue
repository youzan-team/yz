<template>
  <div>
    <el-button type="primary" size="medium" style="background:#155bd4" @click="dialogVisible = true">添加客户</el-button>
      <el-dialog title="添加客户" :visible.sync="dialogVisible" width="450px" :before-close="handleClose" custom-class="ccc" top="30px">
        <div class="line line1">
          <span>*</span><span>客户身份:</span>
          <el-radio v-model="radio1" label="1">非会员</el-radio>
          <el-radio v-model="radio1" label="2">会员</el-radio>
        </div>
        <div class="line line2 line1">
          <span style="margin-left: 12px;">*</span><span>手机号:</span>
          <div class="phone">
            <el-input v-model="input" placeholder="" @blur="verify"></el-input>
          </div>
        </div>
        <div class="line line3">
          <span>姓名:</span>
          <div class="name">
            <el-input v-model="input" placeholder=""></el-input>
          </div>
        </div>
        <div class="line line3">
          <span>标签:</span>
          <div class="lab">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
          </div>
        </div>
        <div class="line line3">
          <span>性别:</span>
          <el-radio v-model="radio2" label="1">男</el-radio>
          <el-radio v-model="radio2" label="2">女</el-radio>
        </div>
        <div class="line line3">
          <span>生日:</span>
          <div class="birthday">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </div>
        <div class="line line3">
          <span>地域:</span>
          <div class="lab">
              <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
          </div>
        </div>
        <div class="line line3" style="position: relative;margin-left:72px;">
          <span class="note">备注:</span>
          <div class="name">
            <el-input type="textarea" :rows="2" placeholder="请不要超过两百字" v-model="textarea"></el-input>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'add',
  data: function () {
    return {
      dialogVisible: false,
      radio1: '1',
      radio2: '',
      input: '',
      textarea:'',
      value:'',
      value1:'',
      options1: [{value: '选项1',label: '无标签客户'}],
      options2: [{
        value: '选项1',
        label: '北京市'
      }, {
        value: '选项2',
        label: '天津市'
      }, {
        value: '选项3',
        label: '河北省'
      }],
    }
  },
  methods:{
    handleClose(){
      
    },
    verify(){
      console.log(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.line {
  margin-bottom: 24px;
}
.line1 {
  span:nth-of-type(1) {
    display: inline-block;
    color: #d40000;
  }
  span:nth-of-type(2) {
    display: inline-block;
    margin-right: 10px;
  }
}
.line2 {
  .phone {
    display: inline-block;
    width: 200px;
  }
}
.line3 {
  .name {
    display: inline-block;
    width: 200px;
  }
  .lab{
    display: inline-block;
    width: 250px;
  }
  .birthday{
    display: inline-block;
    width: 250px;
  }
  span{
    margin-left: 30px;
    margin-right: 10px;
  }
}
.note{
  display: inline-block;
  position: absolute;
  top: 5px;
  left: -71px;
}
</style>
