<template>
  <el-table-column
    :width="tableHeaderWidth[index]"
    :label="tableHeaderItem.name"
    :prop="tableHeaderItem.prop"
    v-bind="tableHeaderItem.attrs"
  >
    <template #default="{ row, column }">
      <!-- 特殊渲染 -->
      <template v-if="customColumn[column['property']]">
        <!-- bind 如何执行 -->
        <!-- 为什么是v-bind :on-event   ?  @on-event  -->
        <component
          :is="customMap[
            customColumn[column['property']].el
          ]"
          v-model="row[column.property]"
          :row="row"
          :prop="column.property"
          :style="customColumn[column.property].styles?.call({}, row[column['property']], column.property, row)"
          :customColumn="customColumn[column.property].fun?.bind({}, row[column.property], column.property, row)"
          :on-event="customColumn[column.property].onEvent"
          @click.stop
        />


        <!-- <component
          :is="
            customMap[
              customColumn[column.property].el
            ] || customColumn[column.property].el
          "
          v-model="row[column.property]"
          :prop="column.property"
          :row="row"
          :style="customColumn[column.property].styles?.call({}, row[column.property], column.property, row)"
          :customColumn="customColumn[column.property].customColumn?.bind({}, row[column.property], column.property, row)"
          :on-event="customColumn[column.property].onEvent"
          @click.stop
        /> -->
      </template>
      
      <!-- 普通文本 -->
      <template v-else>
        {{ row[column['property']] }}
      </template>
    </template>

  </el-table-column>
</template>

<script lang="ts">
import {
 defineComponent,
 PropType,
 ref
} from 'vue'
import { ITableHeader, CustomColumn } from '@/components/types'
import ElementLink from '@/components/PublicTable/ElementLink.vue'

export default defineComponent({
 name: 'TableHeaderEdit',
 components: {
   ElementLink
 },
 props: {
   tableHeaderData: {
     type: Array,
     default: () => {
       return []
     }
   },
   tableHeaderItem: {
      type: Object as PropType<ITableHeader>,
      default: () => ({})
   },
   tableHeaderWidth: {
      type: Array as PropType<Array<number>>,
      default: () => ([])
    },
    index: {
      type: Number as PropType<number>,
      default: () => 0
    },
    customColumn: {
      type: Object as PropType<CustomColumn>,
      default: () => ({})
    }
 },
 setup () {

   const customMap = {
     link: 'ElementLink',
   }

  return {
    customMap
  }
 }
})
</script>

<style scoped lang="scss">

</style>
