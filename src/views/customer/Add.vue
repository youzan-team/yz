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
            <el-input v-model="phone" placeholder="" @blur="verify" type="text"></el-input>
          </div>
          <span style="color:#d40000;margin-left:10px" v-text="prompt"></span>
        </div>
        <div class="line line3">
          <span>姓名:</span>
          <div class="name">
            <el-input v-model="name" placeholder=""></el-input>
          </div>
        </div>
        <div class="line line3">
          <span>标签:</span>
          <div class="lab">
              <el-select v-model="label" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.label"></el-option>
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
            <el-date-picker v-model="birthday" type="date" placeholder="选择日期" value-format="timestamp"></el-date-picker>
          </div>
        </div>
        <div class="line line3">
          <span>地域:</span>
          <div class="lab">
              <el-select v-model="place" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.label"></el-option>
              </el-select>
          </div>
        </div>
        <div class="line line3" style="position: relative;margin-left:72px;">
          <span class="note">备注:</span>
          <div class="name">
            <el-input type="textarea" :rows="2" placeholder="请不要超过两百字" v-model="textarea"></el-input>
          </div>
        </div>
        <span slot="footer" class="dialog-footer" >
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="save" >保 存</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'add',
  data: function () {
    return {
      prompt: '',
      dialogVisible: false,  //页面的打开与关闭
      radio1: '1',   //会员
      radio2: '',    //性别
      phone: '',     //电话
      name: "",       //姓名
      label: "",     //标签
      birthday: '',   //生日
      place: "",     //地域
      textarea: '',  //备注
      options1: [{ value: '选项1', label: '无标签客户' }],
      options2: [
        {
          value: '选项1',
          label: '北京市'
        },
        {
          value: '选项2',
          label: '天津市'
        },
        {
          value: '选项3',
          label: '河北省'
        }
      ],
      // addcustomer:{
      //   identity:this.radio1,       //1非会   2会员
      //   sex:this.radio2,             //1男     2女
      //   phone:this.phone,        //电话
      //   name:this.name,          //姓名
      //   label:this.label,          //标签
      //   birthday:this.birthday,   //生日  时间戳
      //   place:this.place,   //地域
      //   textarea:this.textarea  //备注
      // }
    }
  },
  methods: {
    ...mapMutations('customer',['addCustomer']),
    verify() {
      if (!this.phone) {
        this.prompt = '请填写手机号'
      } else {
        let reg = /^1[3456789]\d{9}$/
        if (!reg.test(this.phone)) {
          this.prompt = '请输入正确的手机号'
        } else {
          this.prompt = ''
        }
      }
    },
    empty(){    //数据置空
      this.radio1='1',       //1非会   2会员
      this.radio2='',        //1男     2女
      this.phone='',            //电话
      this.name='',            //姓名
      this.label='',          //标签
      this.birthday='',       //生日  时间戳
      this.place='',         //地域
      this.textarea=''       //备注
      this.prompt= ''  //提示
    },
    handleClose() {   //点击x
      this.dialogVisible = false
      this.empty()
    },
    cancel() {    //取消
      this.dialogVisible = false
      this.empty()
    },
    save() {  //保存
      if(!this.phone||this.prompt){
        return
      }
      this.dialogVisible = false
      let addCustomer = {
        identity: this.radio1,       //1非会   2会员
        sex: this.radio2,             //1男     2女
        phone: this.phone,        //电话
        name: this.name,          //姓名
        label: this.label,          //标签
        birthday: this.birthday,   //生日  时间戳
        place: this.place,   //地域
        textarea: this.textarea  //备注
      }
      if(addCustomer.identity==1){
        addCustomer.identity='非会员'
      }else{
        addCustomer.identity='会员'
      }
      if(addCustomer.sex==1){
        addCustomer.sex='男'
      }else{
        addCustomer.sex='女'
      }
      this.empty()
      console.log(addCustomer)
      this.addCustomer(addCustomer)
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
  .lab {
    display: inline-block;
    width: 250px;
  }
  .birthday {
    display: inline-block;
    width: 250px;
  }
  span {
    margin-left: 30px;
    margin-right: 10px;
  }
}
.note {
  display: inline-block;
  position: absolute;
  top: 5px;
  left: -71px;
}
</style>
