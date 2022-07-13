<template>
  <div class="element-state">
    <span
      class="element-state__circle"
      :class="{
        warning: modelValue == 1
      }"
    ></span>
    <span class="element-state__text">{{ render() }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { PublicTableElementComponentProps, PublicTableElementProps } from '@/components/types'

export default defineComponent({
  name: 'ElementState',
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
.element-state {
  display: flex;
  align-items: center;
  line-height: initial;

  .element-state__circle {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $color-success;

    &.warning {
      background-color: $color-warning;
    }
  }

  .element-state__text {
    flex: 1;
    padding-left: 8px;
  }
}
</style>
