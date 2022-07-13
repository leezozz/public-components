<template>
  <div>
    <el-switch
      v-if="row.isSwitch"
      v-model="currentValue"
    />
    <div v-else>
      {{ row.total }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from 'vue'

export default defineComponent({
  name: 'TextOrSwitch'
})
</script>

<script lang="ts" setup>
const props = defineProps({
  row: {
    type: Object as PropType<any>,
    default() {
      return {}
    }
  },
  modelValue: {
    type: [Boolean, String, Number],
    default: null
  }
})

const emit = defineEmits([
  'update:modelValue'
])

const currentValue = ref()

watch(
  () => props.modelValue,
  () => {
    if (props.modelValue) {
      currentValue.value = props.modelValue
    }
  },
  {
    immediate: true
  }
)

watch(
  () => currentValue.value,
  () => {
    emit('update:modelValue', currentValue.value)
  },
  {
    immediate: true
  }
)

</script>
