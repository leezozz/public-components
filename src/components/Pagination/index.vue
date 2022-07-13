<template>
  <div class="custom-pagination">
    <el-pagination
      v-model:currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="[20,40,60,80,100]"
      layout="slot, prev, pager, next, sizes"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
      <span class="wrap-pageination-slot">{{ '共有数据' + total + '条' }}</span>
    </el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, ref, watch } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
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
    'update:currentPage'
  ],
  setup(props: any) {
    const { proxy } = getCurrentInstance() as any
    const a = ref(20)
    const currentPage = ref(1)
    watch(() => props.a, () => {
      console.log(props.pageSize,' props.pageSizeprops.pageSizeprops.pageSizeprops.pageSize')
    })

    const handleSizeChange = (val: number) => {
      a.value = val
      console.log(a)
      proxy.$emit('handleSizeChange', val)
    }

    const handleCurrentChange = (val: number) => {
      proxy.$emit('update:currentPage', val)
      proxy.$emit('handleCurrentChange', val)
    }
    return {
      currentPage,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="scss">
.custom-pagination {
  padding-top: 20px;

  :deep() {

    .el-pagination {
      display: flex;
    }
  }

  .wrap-pageination-slot {
    flex: 1;
    justify-content: flex-start !important;
  }
}
</style>