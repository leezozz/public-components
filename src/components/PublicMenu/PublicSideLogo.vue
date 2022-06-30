<template>
  <div class="public-side-logo">
    logo
  </div>
</template>

<script lang="ts">
import {
 defineComponent,
 ref
} from 'vue'

export default defineComponent({
 name: 'PublicSideLogo',
 components: {},
 props: {},
 setup () {

  return {
  }
 }
})
</script>

<style scoped lang="scss">
.public-side-logo {
  height: 56px;
  background-color: rgb(242, 225, 244);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
