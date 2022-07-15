<template>
  <div class="box-button">
    <el-button
      type=""
      link
      @click="handleClick()"
    >
      {{ customColumn?.() || modelValue }}
    </el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  PublicTableElementComponentProps,
  PublicTableElementProps
} from '@/components/types'

export default defineComponent({
  name: 'ElementLink',
  props: PublicTableElementComponentProps,
  setup(props: PublicTableElementProps) {
    const handleClick = () => {
      props.onEvent(props.modelValue, props.prop, props.row)
    }
    return {
      handleClick
    }
  }
})
</script>

<style lang="scss" scoped>
.element-link {
}

.box-button {

  .el-button {
    color: #155bd4;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
