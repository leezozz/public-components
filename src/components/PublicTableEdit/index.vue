<template>
  <el-table
    class="public-table-edit"
    :data="tableData"
    height="100%"
    style="width: 100%;"
    :border="border"
    @row-click="handleRowClick"
    @selection-change="handleSelectionChange"
  > 
    <!-- 多选 -->
    <el-table-column type="selection" width="40" />
    <TableHeaderEdit 
      :tableHeaderData="tableHeaderData" 
      v-for="(tableHeaderItem, tableHeaderIndex) in tableHeaderData"
      :key="tableHeaderIndex"
      :index="tableHeaderIndex"
      :table-header-item="tableHeaderItem"
      :table-header-width="tableHeaderWidth"
      :customColumn="customColumn"
    />
  </el-table>
  <Pagination
    v-if="showPagination"
    :current-page="currentPage"
    :page-size="pageSize"
    :total="total"
    @handle-size-change="handleSizeChange"
    @handle-current-change="handleCurrentChange"
  />
</template>

<script lang="ts">
import {
 defineComponent,
 reactive,
 PropType,
 ref
} from 'vue'
import TableHeaderEdit from '@/components/PublicTableEdit/TableHeaderEdit.vue'
import Pagination from '@/components/Pagination/index.vue'
import { CustomColumn } from '@/components/types'

export default defineComponent({
 name: 'PublicTableEdit',
 components: {
   TableHeaderEdit,
   Pagination
 },
 props: {
   tableHeaderData: {
     type: Array,
     default: () => {
       return []
     }
   },
   tableData: {
     type: Array,
     default: () => {
       return []
     }
   },
   tableHeaderWidth: {
      type: Array as PropType<Array<number>>,
      default: () => []
   },
   customColumn: {
     type: Object as PropType<CustomColumn>,
     default: () => {
       return {}
     }
   },
   border: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    total: {
      type: Number,
      default: 500
    }
 },
 emits: [
    'handleSizeChange',
    'handleCurrentChange',
    'update:currentPage',
    'handleRowClick',
    'handleSelectionChange'
 ],
 setup (props, {emit}) {


  // 行点击
  const handleRowClick = (row: any) => {
    console.log('行点击', row)
    emit('handleRowClick', row)
  }

  // 一页多少条
  const handleSizeChange = (val: number) => {
    console.log(`${ val } items per page`)
    emit('handleSizeChange', val)
  }

  // 当前页数
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${ val }`)
    emit('update:currentPage', val)
    emit('handleCurrentChange', val)
  }

  // 表格多选
  const handleSelectionChange = (val: []) => {
    console.log('表格多选', val)
    emit('handleSelectionChange', val)
  }


  return {

    handleRowClick,
    handleSizeChange,
    handleCurrentChange,
    handleSelectionChange
  }
 }
})
</script>

<style scoped lang="scss">
.public-table-edit {
  :deep() {
    tbody {
      color: #303133;
    }
    th {
      background-color: #e1e3e5 !important;  // 设置表头的背景颜色
      padding: 0 !important;
      height: 36px;
      line-height: 20px;
    }
    td {
      padding: 0 !important;
      height: 36px;
      line-height: 20px;
    }
  }
}

.el-pagination {
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 6px; //解决--会出现闪烁滚动款
  overflow: hidden; //解决--会出现闪烁滚动款
  :deep() {
    .el-pagination__sizes {
      margin-right: 0;
    }
    .el-input--suffix {
      margin-right: 0;
    }
  }
}
</style>
