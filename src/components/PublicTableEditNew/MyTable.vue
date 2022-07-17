<template>
  <el-table
    class="roles-rights-table"
    :data="tableData"
    height="100%"
    style="width: 100%;"
    :border="true"
  >
    <el-table-column 
      v-for="(item, index) in tableHeader"
      :key="index"
      :label="item.label"
      :prop="item.prop"
      >
      <template #default="{ row, column }">
        {{ row[item.prop] }}
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'

export default defineComponent({
  name: 'MyTable',
  components: {
  },
  props: {
    tableData:{
      type: Array,
      default: () => {
        return []
      }
    },
    tableHeader:{
      type: Array,
      default: () => {
        return []
      }
    },
  },
  setup () {
 

    return {
    }
  }
})
</script>

<style scoped lang="scss">

</style>
