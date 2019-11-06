<template>
  <div>
    <el-row>
      <!-- <el-col :span="2"><div style="background:#444;height:1300px"></div></el-col> -->
      <el-col :span="18">
      <div class="container">
          <el-row class="aaa">
            <el-col :span="2" :offset="1"><div class="container-top">客户查询</div></el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="content">
                <div class="content-inner">
                  <div class="content-init">
                    <Add></Add>
                    <div class="verify">粉丝管理</div>
                    <div class="content-container">
                      <div class="con-title">
                        <el-row :gutter="20">
                          <el-col :span="4"><div class="button button-on">
                            <div>全部客户<span style="display:none" class="span-on">?</span></div>
                            <div class="num num-on">0位</div>
                          </div></el-col>
                          <el-col :span="4"><div class="button">
                            <div>新增客户
                              <el-tooltip class="item" effect="dark" content="最近30天新增并且没有任何交易记录的客户" placement="top">
                                <span class="">?</span>
                              </el-tooltip>
                            </div>
                            <div class="num">0位</div>
                          </div></el-col>
                          <el-col :span="4"><div class="button">
                            <div>兴趣人群                              
                              <el-tooltip class="item" effect="dark" content="近7天有加购行为，但没有成功付款的客户" placement="top">
                                <span class="">?</span>
                              </el-tooltip>
                            </div>
                            <div class="num">0位</div>
                          </div></el-col>
                          <el-col :span="4"><div class="button">
                            <div>微信互动粉丝                              
                              <el-tooltip class="item" effect="dark" content="48小时内有在公众号内发生过互动行为的粉丝" placement="top">
                                <span class="">?</span>
                              </el-tooltip>
                            </div>
                            <div class="num">0位</div>
                          </div></el-col>
                        </el-row>
                      </div>
                      <Filtrate></Filtrate>
                      <Table></Table>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="4"><div style="background:pink;height:1300px"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import Filtrate from './Filtrate.vue'
import Table from './Table.vue'
import Add from './Add.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'customer',
  components:{
    Filtrate,
    Table,
    Add
  },
  computed:{
    ...mapState('customer',['aa'])
  },
  mounted:function(){
    this.aad()
  },
  methods:{
    ...mapActions('customer',['aad'])
  }
  // data:function(){
  //   return {
  //     dialogVisible: false
  //   }
  // },
  
}
</script>

<style lang="scss" scoped>
* {
  font-size: 14px;
}
.container {
  background: #fff;
  //height: 1300px;
  .aaa {
    border: 1px solid #dcdfe6;
    .container-top {
      height: 55px;
      font-size: 14px;
      line-height: 55px;
    }
  }
  .content {
    //height: 1200px;
    background: #f7f8fa; //#f7f8fa
    padding: 16px;
    .content-inner {
      background: #fff;
      width: 100%;
      height: 100%;
      padding: 16px;
      box-sizing: border-box;
      .content-init {
        background: #fff;
        width: 100%;
        height: 100%;
        .verify {
          float: right;
          color: #155bd4;
          width: 56px;
          height: 30px;
          line-height: 30px;
        }
        .content-container {
          background: #f7f8fa;
          margin-top: 20px;
          width: 100%;
          height: 100%;
          overflow: hidden;
          .con-title {
            width: 1020px;
            height: 76px;
            margin: 18px 0 0 20px;
            border-bottom: 1px solid #dbdbdb;
            .button {
              background: #fff;
              height: 57.6px;
              border: 1px solid #fff;
              border-radius: 2px;
              padding: 8px;
              box-sizing: border-box;
              cursor: pointer;
              span {
                display: inline-block;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: #dcdee0;
                margin-left: 3px;
                font-size: 12px;
                text-align: center;
                line-height: 14px;
                color: #fcfcfc;
              }
              .span-on {
                color: #fff;
                background: #155bd4;
              }
              .num {
                font-size: 10px;
                margin-top: 4px;
                color: #a0a1a3;
              }
              .num-on {
                color: #155bd4;
              }
            }
            .button-on {
              border: 1px solid #155bd4;
              background: #e8effa;
              color: #2a69d8;
            }
          }
        }
      }
    }
  }
}
</style>
