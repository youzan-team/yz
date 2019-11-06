<template>
  <div class="filtrate">
    <div class="date">
      <span class="date1">上次消费时间:</span>
      <el-date-picker v-model="last_time" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="last_timeEnd" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">成为客户时间:</span>
      <el-date-picker v-model="customer_time" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="customer_timeEnd" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">成为会员时间:</span>
      <el-date-picker v-model="member_time" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="member_timeEnd" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">关键词:</span>
      <div class="keywords">
        <el-input  placeholder="手机号/微信昵称/姓名" style="width:100%" v-model="keywords"></el-input>
      </div>
    </div>
    
    <div class="unfold">
      <el-collapse-transition>
        <div v-show="show">
          <div class="block">
            <span class="block1">客户身份:</span>
            <el-select v-model="identity" placeholder="请选择">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <span class="block2">权益卡:</span>
            <el-select v-model="privilege" placeholder="请选择">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">性别:</span>
            <el-select v-model="sex" placeholder="请选择">
              <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <span class="block2">来源渠道:</span>
            <el-select v-model="source" placeholder="请选择">
              <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">来源方式:</span>
            <el-select v-model="way" placeholder="请选择">
              <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <span class="block2">微信地域:</span>
            <el-select v-model="place" placeholder="请选择">
              <el-option v-for="item in options6" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">标签:</span>
            <el-select v-model="label" placeholder="请选择">
              <el-option v-for="item in options7" :key="item.value" :label="item.label" :value="item.label"></el-option>
            </el-select>
            <span class="block2">购买次数:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="num"><i slot="suffix">次</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="numEnd"><i slot="suffix">次</i></el-input>
              </span>
            </div>
          </div>
          <div class="block">
            <span class="block1">笔单价:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="price"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="priceEnd"><i slot="suffix">元</i></el-input>
              </span>
            </div>
            <span class="block2">积分:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="integral"><i slot="suffix">分</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="integralEnd"><i slot="suffix">分</i></el-input>
              </span>
            </div>
          </div>
          <div class="block">
            <span class="block1">储值余额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="" v-model="balance"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="" v-model="balanceEnd"><i slot="suffix">元</i></el-input>
              </span>
            </div>
            <span class="block2">累计消费金额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="" v-model="money"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="" v-model="moneyEnd"><i slot="suffix">元</i></el-input>
              </span>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="operation">
      <el-button type="primary" style="margin-left:120px;background:#155bd4" @click="filtrate">筛选</el-button>
      <span @click="empty">重置筛选条件</span>
      <a @click="show = !show" v-text="showTxt"></a>
      <i class="el-icon-arrow-down" v-if="!show"></i>
      <i class="el-icon-arrow-up" v-else></i>
    </div>

    
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "filtrate",
  data() {
    return {
      last_time: '',
      last_timeEnd: '',
      customer_time: '',
      customer_timeEnd: '',
      member_time: '',
      member_timeEnd: '',
      keywords: '',
      identity: '',
      privilege: '',
      sex: '',
      source: '',
      way: '',
      place: '',
      label: '',
      num: '',
      numEnd: '',
      price: '',
      priceEnd: '',
      integral: '',
      integralEnd: '',
      balance: '',
      balanceEnd: '',
      money: '',
      moneyEnd: '',
      show: false,   //控制筛选的展开和收起
      options1: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '会员'
        },
        {
          value: '选项3',
          label: '非会员'
        },
        {
          value: '选项4',
          label: '禁止购买名单'
        }
      ],
      options2: [{ value: '选项1', label: '全部' }],
      options3: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '男'
        },
        {
          value: '选项3',
          label: '女'
        }
      ],
      options4: [{ value: '选项1', label: '全部' }, { value: '选项2', label: '其他' }],
      options5: [{ value: '选项1', label: '手工录入' }],
      options6: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '北京市'
        },
        {
          value: '选项3',
          label: '天津市'
        },
        {
          value: '选项4',
          label: '河北省'
        }
      ],
      options7: [{ value: '选项1', label: '无标签客户' }],
      value: ''
    };
  },
  computed: {
    showTxt: function () { //控制 收起展开
      if (this.show) {
        return '收起'
      } else {
        return '展开'
      }
    }
  },
  methods: {
    ...mapMutations('customer', ['filtrateCustomer']),
    filtrate() {   //筛选
      let conditions = {
        last_time: this.last_time,
        last_timeEnd: this.last_timeEnd,
        customer_time: this.customer_time,
        customer_timeEnd: this.customer_timeEnd,
        member_time: this.member_time,
        member_timeEnd: this.last_timeEnd,
        keywords: this.keywords,
        identity: this.identity,
        privilege: this.privilege,
        sex: this.sex,
        source: this.source,
        way: this.way,
        place: this.place,
        label: this.label,
        num: this.num,
        numEnd: this.numEnd,
        price: this.price,
        priceEnd: this.priceEnd,
        integral: this.integral,
        integralEnd: this.integralEnd,
        balance: this.balance,
        balanceEnd: this.balanceEnd,
        money: this.money,
        moneyEnd: this.moneyEnd,

      }
      //console.log(conditions)
      for (var key in conditions) {   //清除所有空的条件
        if (!conditions[key]) {
          delete conditions[key]
        }
      }
      //console.log(conditions)
      if(JSON.stringify(conditions) == '{}'){    //如果所有条件为空，退出
        return
      }
      this.filtrateCustomer(conditions)
    },
    empty() {   //重置筛选条件
      this.last_time = ''
      this.last_timeEnd = ''
      this.customer_time = ''
      this.customer_timeEnd = ''
      this.member_time = ''
      this.member_timeEnd = ''
      this.keywords = ''
      this.identity = ''
      this.privilege = ''
      this.sex = ''
      this.source = ''
      this.way = ''
      this.place = ''
      this.label = ''
      this.num = ''
      this.numEnd = ''
      this.price = ''
      this.priceEnd = ''
      this.integral = ''
      this.integralEnd = ''
      this.balance = ''
      this.balanceEnd = ''
      this.money = ''
      this.moneyEnd = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.filtrate {
  width: 100%;
  background: #f7f8fa;
  margin: 20px 0 0 20px;
  height: auto;
  .date {
    color: #322233;
    margin-bottom: 24px;
    .date1 {
      display: inline-block;
      width: 105px;
      height: 40px;
      margin-right: 15px;
      line-height: 40px;
      text-align: right;
    }
    .date2 {
      padding: 0 10px;
    }
    .keywords {
      width: 220px;
      display: inline-block;
    }
  }
  .operation {
    color: #2b6ad8;
    cursor: pointer;
    span {
      display: inline-block;
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .unfold {
    .block {
      margin-bottom: 24px;
      .block1 {
        width: 105px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        margin-right: 15px;
        text-align: right;
      }
      .block2 {
        width: 105px;
        height: 40px;
        line-height: 40px;
        display: inline-block;
        margin-right: 15px;
        text-align: right;
      }
      .num {
        width: 220px;
        display: inline-block;
        span:nth-of-type(1) {
          width: 100px;
          display: inline-block;
        }
        span:nth-of-type(2) {
          display: inline-block;
          margin-left: 7.5px;
          margin-right: 7.5px;
        }
        span:nth-of-type(3) {
          width: 100px;
          display: inline-block;
        }
        i {
          color: #646566;
          display: inline-block;
          height: 40px;
          line-height: 40px;
          font-style: normal;
        }
      }
    }
  }
}
</style>
