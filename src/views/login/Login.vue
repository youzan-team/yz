<template>
 <div class="login">
     <div class="header">
         <span><img :src="icons.logo_src" alt=""></span>
         <span>登录</span>
     </div>
     <div class="main">
        <span>
            <loginCon></loginCon>
        </span>
         <span><img :src="icons.page_src" alt=""></span>
     </div>
 </div>
    
</template>

<script>
import { icons } from '@/assets/index.js'
import loginCon from './LoginCon.vue'
export default {
     data:function() {
         return {
             icons,
         } 
     },
    components:{
        loginCon
    }
}
</script>

<style lang="scss" scoped>
    .login{
        width: 900px;
        margin: 50px auto;
        >.header{
            padding-bottom: 15px;
            border-bottom: 1px solid #efefef;
            font-size: 16px;
            color: #323233;
            span{
                display: inline-block;
                &:first-child{
                    padding:15px 15px 0 0 ;
                   
                }
                &:last-child{
                    padding:0 0 15px 15px ;
                    border-left: 1px solid #eeeeee;
                }
            }
        }
        >.main{
            
            span{
                 display: inline-block;
                 &:first-child{
                    height: 360px;
                    width: 400px;
                    padding-right: 35px ;
                    border-right: 1px solid #efefef;
                    box-shadow: 0 0 6px rgba(0,0,0,.08);
                }
                &:last-child{
                    img{
                       width: 380px;
                    }
                    padding:30px 0 15px 35px ;
                }
            } 
        }

    }

</style>

