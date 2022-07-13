<template>
  <el-button
    type="text"
    class="element-text"
  >
    {{ render() }}
  </el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PublicTableElementComponentProps, PublicTableElementProps } from '@/components/types'

export default defineComponent({
  name: 'ElementText',
  props: PublicTableElementComponentProps,
  setup(props: PublicTableElementProps) {
    return {
    }
  }
})
</script>

<style lang="scss" scoped>
.element-text {
  color: #909399 !important;
}
</style>
