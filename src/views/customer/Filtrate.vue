<template>
  <div class="filtrate">
    <div class="date">
      <span class="date1">上次消费时间:</span>
      <el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="value1" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">成为客户时间:</span>
      <el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="value1" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">成为会员时间:</span>
      <el-date-picker v-model="value1" type="date" placeholder="开始日期" value-format="timestamp"></el-date-picker>
      <span class="date2">至</span>
      <el-date-picker v-model="value1" type="date" placeholder="结束日期" value-format="timestamp"></el-date-picker>
    </div>
    <div class="date">
      <span class="date1">关键词:</span>
      <div class="keywords">
        <el-input  placeholder="请输入内容" style="width:100%"></el-input>
      </div>
    </div>
    
    <div class="unfold">
      <el-collapse-transition>
        <div v-show="show">
          <div class="block">
            <span class="block1">客户身份:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span class="block2">权益卡:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">性别:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span class="block2">来源地域:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">来源方式:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span class="block2">微信地域:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="block">
            <span class="block1">标签:</span>
            <el-select v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <span class="block2">购买次数:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">次</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">次</i></el-input>
              </span>
            </div>
          </div>
          <div class="block">
            <span class="block1">笔单价:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>
            <span class="block2">积分:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="0" v-model="input3"><i slot="suffix">分</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="0" v-model="input3"><i slot="suffix">分</i></el-input>
              </span>
            </div>
          </div>
          <div class="block">
            <span class="block1">储值余额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>
            <span class="block2">累计消费金额:</span>
            <div class="num">
              <span>                        
                <el-input placeholder="" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
              <span>-</span>
              <span>
                <el-input placeholder="" v-model="input3"><i slot="suffix">元</i></el-input>
              </span>
            </div>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="operation">
      <el-button type="primary" style="margin-left:120px;background:#155bd4">筛选</el-button>
      <span>重置筛选条件</span>
      <a @click="show = !show">展开</a>
      <i class="el-icon-arrow-down"></i>
    </div>

    
  </div>
</template>

<script>
export default {
  name: "filtrate",
  data() {
    return {
      value1: '',
      value2: '',
      input3:'',
      show: true,
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
    };
  },
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
      .num{
        width: 220px;
        display: inline-block;
        span:nth-of-type(1){
          width: 100px;
          display: inline-block;
        }
        span:nth-of-type(2){
          display: inline-block;
          margin-left: 7.5px;
          margin-right: 7.5px;
        }
        span:nth-of-type(3){
          width: 100px;
          display: inline-block;
        }
        i{
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
