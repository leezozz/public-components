<template>
  <div class="test-table-style">
    <!-- <PublicTable  
      :table-data="curTableData"
      :table-header-data="curTableHeaderData"
      :table-header-width="tableHeaderWidth"
      :show-pagination="false"
    /> -->

    <PublicTableEdit 
      :table-header-width="tableHeaderWidth"
      :tableHeaderData="curTableHeaderData"
      :tableData="curTableData"
      border
      :currentPage="currentPage"
      :pageSize="pageSize"
      :total="total"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
      @handleSelectionChange="handleSelectionChange"
      :customColumn="customColumn"
    />
  </div>
</template>

<script lang="ts">
import {
 defineComponent,
 ref
} from 'vue'

import { testTableHeaderData, testTableData } from '@/modules/DemoTest/data/index'

export default defineComponent({
 name: 'TestTable',
 components: {},
 props: {},
 setup () {

  // const tableHeaderWidth = ref([150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150])
  const tableHeaderWidth = ref([80, 150, 150, 150, 150, 150, 150, 150, 150])

   // 表头数据
  const curTableHeaderData = testTableHeaderData

  // 表体数据
  const curTableData = testTableData

  const currentPage = ref(1)
  const pageSize = ref(20)
  const total = ref(100)

  // 一页多少条
  const handleSizeChange = (val: any) => {
    console.log(' 一页多少条 ', val)
  }

  // 当前页数
  const handleCurrentChange = (val: any) => {
    console.log(' 当前页数 ', val)
  }

  // 表格多选
  const handleSelectionChange = (val: any) => {
    console.log('表格多选--- ', val)
  }

  // 渲染列
  const customColumn = ref({
    '编号': {
      el: 'link',
      // customData
      // customEvent
      customData(isWarning: any, prop: any, row: any) {
        // return row.编号
      }
    }
  })

  return {
    tableHeaderWidth,
    curTableHeaderData,
    curTableData,
    currentPage,
    pageSize,
    total,
    customColumn,

    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  }
 }
})
</script>

<style scoped lang="scss">
.test-table-style {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: #fff;
  border-radius: 4px;

}
</style>
