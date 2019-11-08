<template>
<div> 
   <el-table
    :data="tableData"
    height="220"
    style="font-size:12px;padding:0;color:#323233"
   >
    <el-table-column
      prop="desc"
      
      width="150">
    </el-table-column>
    <el-table-column
      prop="subDesc"
      color="#15bd44"
      width="400"
    >
    </el-table-column>
    <el-table-column
      prop="event"
      width="80"
      style="font-size:12px;padding:0;color:#15bd44"
      >
    </el-table-column>
  </el-table>
</div>   
</template>

<script>
import { mapState, mapActions} from 'vuex'
export default {
    computed:{
      ...mapState('shop',['tableData'])
    },
    mounted() {
      this.getTableData()
    },
    methods:{
      ...mapActions('shop',['getTableData'])
    }
  }

</script>

<style lang="scss" scoped>
.cell{
  padding: 0;
  border: 0;
}
</style>


