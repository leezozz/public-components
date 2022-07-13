<template>
  <div>
    <PublicTable  
      :table-data="curTableData"
      :table-header-data="curTableHeaderData"
      :table-header-width="tableHeaderWidth"
      :show-pagination="false"
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

  const tableHeaderWidth = ref([150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150])

   // 表头数据
    const curTableHeaderData = testTableHeaderData

    // 表体数据
    const curTableData = testTableData


  return {
    tableHeaderWidth,
    curTableHeaderData,
    curTableData
  }
 }
})
</script>

<style scoped lang="scss">

</style>
