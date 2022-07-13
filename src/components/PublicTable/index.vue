<template>
  <el-table
    class="roles-rights-table"
    :data="tableData"
    height="100%"
    style="width: 100%;"
    :cell-style="getCellStyle"
    :cell-class-name="getCellClassName"
    v-bind="$attrs"
    :border="border"
    @row-click="handleRowClick"
  >
    <TableHeader
      v-for="(tableHeaderItem, tableHeaderIndex) in tableHeaderData"
      :key="tableHeaderIndex"
      :index="tableHeaderIndex"
      :table-header-item="tableHeaderItem"
      :table-header-width="tableHeaderWidth"
      :render-list="renderList"
      warning-column="warningColumn"
    />
    <!-- 固定，宽度暂时定 130 -->
    <el-table-column
      v-if="tableHeaderData.length && $slots['fixed-column-detail']"
      :label="fiexdLabelText"
      fixed="right"
      :width="actionColumnWidth ? actionColumnWidth : 130"
    >
      <template #default="scope">
        <slot
          name="fixed-column-detail"
          v-bind="scope"
        ></slot>
      </template>
    </el-table-column>
    <!-- 操作列，固定，宽度暂时定 130 -->
    <el-table-column
      v-if="tableHeaderData.length && $slots['fixed-column']"
      label="操作"
      fixed="right"
      align="center"
      :width="actionColumnWidth ? actionColumnWidth : 160"
    >
      <template #default="scope">
        <slot
          name="fixed-column"
          v-bind="scope"
        ></slot>
      </template>
    </el-table-column>
    <!-- 操作列，固定，宽度暂时定 130 -->
    <el-table-column
      v-if="isShowOperation"
      label="操作"
      fixed="right"
      align="center"
      :width="actionColumnWidth ? actionColumnWidth : 130"
    >
      <template #default="{ row }">
        <el-button
          type="text"
          @click="handleClickEvent(row)"
        >
          {{ $attrs.indexName }}
        </el-button>
      </template>
    </el-table-column>
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
import { defineComponent, getCurrentInstance, PropType, ref } from 'vue'

import TableHeader from '@/components/PublicTable/TableHeader.vue'

import Pagination from '@/components/Pagination/index.vue'

import { ITableHeader, RenderList } from '@/components/types'
import { useRouter, Router } from 'vue-router'
const useTableActive = (router: Router, proxy: any) => {
  const handleClickEvent = (scope: any) => {
    proxy.$attrs.handleActive(router, scope)
  }

  return {
    handleClickEvent
  }
}
export default defineComponent({
  name: 'PublicTable',
  components: {
    TableHeader,
    Pagination
  },
  props: {
    tableData: {
      type: Array as PropType<Array<any>>,
      default: () => []
    },
    renderList: {
      type: Object as PropType<RenderList>,
      default: () => ({})
    },
    tableHeaderData: {
      type: Array as PropType<Array<ITableHeader>>,
      default: () => []
    },
    tableHeaderWidth: {
      type: Array as PropType<Array<number>>,
      default: () => []
    },
    // 标记哪个字段来决定显示异常行
    warningColumn: {
      type: String,
      default: ''
    },
    actionColumnWidth: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: true
    },
    fiexdLabelText: {
      type: String,
      default: ''
    },
    isShowOperation: {
      type: Boolean,
      default: false
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
    'handleRowClick'
  ],

  setup(props, { emit }) {
    const router = useRouter()

    const handleRowClick = (row: any, column: any, event: any) => {
      // console.log(row, column, event)
      emit('handleRowClick', {
        row,
        column,
        event
      })
    }

    const handleSizeChange = (val: number) => {
      console.log(`${ val } items per page`)
      emit('handleSizeChange', val)
    }

    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${ val }`)
      emit('update:currentPage', val)
      emit('handleCurrentChange', val)
    }
    const { proxy } = getCurrentInstance() as any
    const getCellStyle = ({ row }: any) => {
      const warningKey = proxy.$props['warningColumn']
      if (!row[warningKey]) {
        return
      }
      return {
        backgroundColor: '#feeed0'
      }
    }
    // 通过 cellClassName 设置当前行 row 的下标
    const getCellClassName = ({ row, rowIndex }: any) => {
      row.$rowIndex = rowIndex as any
      return {}
    }

    return {
      handleCurrentChange,
      handleSizeChange,
      getCellStyle,
      getCellClassName,
      handleRowClick,
      ...useTableActive(router, proxy)
    }
  }
})
</script>

<style scoped lang="scss">
.roles-rights-table {
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
