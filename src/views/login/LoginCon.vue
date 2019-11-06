<template>
<div class="user_login">
    <div class="ul-login">
        <span>密码登录</span>
        <span>验证码登录</span>
    </div>

    <div class="ul_username">
        <input type="text" name="" placeholder="请输入号码">
    </div>
    <div class="ul_password">
         <input type="text" name="" placeholder="请输入密码">
    </div>
    <div class="ul_login_btn1" @click='login'>登录</div>

    <div class="ul_login_more">
        <span>阅读并同意《用户使用协议》</span>
        <span>忘记密码|免费注册</span>
    </div>
</div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  methods: {
    // 登录
    login() {
      // 获取用户名、密码
      // 数据验证
      
      // res代表登录成功后，后端返回的数据信息，其中包括token和其它用户数据
      let res = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        isLogin: 1
      }
      localStorage.setItem('login', JSON.stringify(res))
     
      setTimeout(()=>{
        this.$router.replace('/')
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.user_login{
    height: 360px;
    width: 330px;
    padding: 50px;
    div{
        width: 350px;
        height: 45px;
        margin-bottom: 20px;
        >input{
            width: 100%;
            height: 100%;
            display: block;
            border: none;
            border-bottom:1px solid #eeeeee; 
            outline: none;
        }
        
    }
   .ul-login span{
        display: inline-block;
        font-size: 18px;
        &:first-child{
            padding:0 15px 0 0 ;
            color: #333333;       
        }
        &:last-child{
            padding:0 0 0 15px ;
            border-left: 1px solid #eeeeee;
            color: #999; 
        }
    }
    .ul_login_btn1{
        width: 350px;
        height: 45px;
        line-height: 45px;
        font-size: 18px;
        color: #fff;
        text-align: center;
        background: #3388ff;
    }
    .ul_login_more span{
        display: inline-block;
        &:first-child{
           float: left;
            color: #999;
            font-size: 12px;        
        }
        &:last-child{
            float: right;
            color: #3388ff;
            font-size: 12px;
        }
    }
}

</style>