<template>
  <el-table-column
    :prop="tableHeaderItem.prop"
    :label="tableHeaderItem.name"
    :width="tableHeaderWidth[index]"
    v-bind="tableHeaderItem.attrs"
  >
    <template #default="{ row, column }">
      <TableHeader
        v-for="(tableHeaderChildItem, tableHeaderChildIndex) in tableHeaderItem.child"
        :key="tableHeaderChildIndex"
        :index="tableHeaderChildIndex"
        :table-header-item="tableHeaderChildItem"
        :table-header-width="tableHeaderWidth"
        :render-list="renderList"
      />
      <!-- 高阶组件 -->
      <template v-if="renderList[column.property]">
        <!--
          is 组件名
          v-model 绑定当前单元格的值
          prop 当前所属列
          row 当前行数据
          render(value, columnKey, row) 当前单元格渲染的回调函数，需要在 ElementXxx.vue 中使用，如 ElementLink.vue
          onEvent 当前单元格会触发的事件函数，如点击事件，鼠标事件等，由 ElementXxx.vue 来决定是什么事件
         -->
        <component
          :is="
            renderMapping[
              renderList[column.property].el
            ] || renderList[column.property].el
          "
          v-model="row[column.property]"
          :prop="column.property"
          :row="row"
          :style="renderList[column.property].styles?.call({}, row[column.property], column.property, row)"
          :render="renderList[column.property].render?.bind({}, row[column.property], column.property, row)"
          :on-event="renderList[column.property].onEvent"
          @click.stop
        />
      </template>
      <!-- 普通文本 -->
      <template v-else>
        <span style="color: #303133;">
          {{ row[column.property] }}
        </span>
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
import { ITableHeader, RenderList } from '@/components/types'

import ElementLink from './ElementLink.vue'
import ElementState from './ElementState.vue'
import ElementText from './ElementText.vue'
import TextOrSwitch from './TextOrSwitch.vue'

export default defineComponent({
  name: 'TableHeader',
  components: {
    ElementLink,
    ElementState,
    ElementText,
    TextOrSwitch
  },
  inheritAttrs: false,
  props: {
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
    renderList: {
      type: Object as PropType<RenderList>,
      default: () => ({})
    }
  },
  setup() {
    const renderMapping = ref({
      link: 'ElementLink',
      state: 'ElementState',
      text: 'ElementText',
      TextOrSwitch: 'TextOrSwitch'
    })
    return {
      renderMapping
    }
  }
})
</script>

<style scoped lang="scss">

</style>
