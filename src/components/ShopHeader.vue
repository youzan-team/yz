<template>
    <el-row>
        <el-col :span="24">
            <div class="head">
               <span>过早</span>
               <span>试用期</span>
               <span>SVIP</span>
               <span>有赞担保</span>
               <div class="fa fa-user-circle-o"  @click ="show">17774949446 <span class="fa fa-angle-right"></span></div> 
            </div>
        </el-col>
        <div v-show='tamp' class="exit"> <el-button type="danger" plain @click = 'exit'>退出登录</el-button></div>
    </el-row> 
</template>

<script>
export default {
  data: function() {
    return {
      tamp: false
    };
  },
  methods: {
    show() {
      this.tamp = true;
    },
    exit() {
      this.tamp = false;
      localStorage.removeItem("login");
      location.reload(true);
    }
  }
};
</script>

<style lang="scss" scoped>
.el-row {
  width: 100%;
  .exit {
    background: #fff;
    padding: 5px;
    border: 1px solid #feefef;
    position: absolute;
    right: 130px;
    top: 50px;
  }
}
.head {
  height: 56px;
  line-height: 56px;
  background: #fff;
  padding-right: 200px;
  span {
    height: 12px;
    line-height: 12px;
    padding: 2px 4px;
    margin: 0 0 0 5px;
    border-radius: 4px;
    &:nth-child(1) {
      color: #323233;
      font-size: 20px;
    }
    &:nth-child(2) {
      color: #155bd4;
      font-size: 12px;
      display: inline-block;
      border: 1px solid #155bd4;
    }
    &:nth-child(3) {
      color: #323233;
      font-size: 12px;
      display: inline-block;
      border: #efefef 1px solid;
    }
    &:nth-child(4) {
      color: #323233;
      font-size: 12px;
      display: inline-block;
      border: #efefef 1px solid;
    }
  }
  > div {
    padding: 2px 4px;
    margin: 20px 0 0 5px;
    color: #323233;
    font-size: 12px;
    float: right;
    position: relative;
    cursor: pointer;
    &:hover .exit {
      display: block;
    }
  }
}
</style>

