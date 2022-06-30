<template>
  <div class="public-menu-index">
    <PublicMenu />
  </div>
</template>

<script lang="ts">
import {
 defineComponent,
 ref
} from 'vue'
import PublicMenu from '@/components/PublicMenu/PublicMenu.vue'

export default defineComponent({
 name: 'PublicMenuIndex',
 components: {
   PublicMenu
 },
 props: {},
 setup () {

  return {
  }
 }
})
</script>

<style scoped lang="scss">
.public-menu-index {
  width: 100%;
  height: 100%;
  background-color: darkgray;
}
</style>
