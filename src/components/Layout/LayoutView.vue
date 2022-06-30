<template>
  <LayoutArea>
    <template #rightTop>
      <!-- <NavigationNavBar
        :fixed="false"
      >
        {{ systemTitle }}
      </NavigationNavBar>
      <NavigationBreadCrumb /> -->
    </template>

    <template #side>
      <LayoutSection
        flex-content
      >
        <PublicMenu />
      </LayoutSection>
    </template>

    <template #content>
      <router-view v-slot="{ Component }">
        <Component :is="Component" />
      </router-view>
    </template>
  </LayoutArea>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

import PublicMenu from '@/components/PublicMenu/PublicMenu.vue'


export default defineComponent({
  name: 'LayoutView',
  components: {
    PublicMenu
  },
  setup() {

    const systemTitle = '测试菜单'

    return {
      systemTitle
    }
  }
})

</script>

<style lang="scss" scoped>
</style>
