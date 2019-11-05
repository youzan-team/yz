<template>
  <div>
    <el-button type="primary" size="medium" style="background:#155bd4" @click="dialogVisible = true">添加客户</el-button>
      <el-dialog title="添加客户" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" custom-class="ccc">
        <div class="line">
          <span>*</span><span>客户身份</span>
            <el-radio v-model="radio" label="1">备选项</el-radio>
            <el-radio v-model="radio" label="2">备选项</el-radio>
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
      radio: '1'
    }
  },
}
</script>

<style lang="scss" scoped>
.el-dialog__header{
  border-bottom: 1px solid #ccc
}
</style>
