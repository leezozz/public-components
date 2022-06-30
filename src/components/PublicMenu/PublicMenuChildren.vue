<template>
  <div
    class="menu-chlldren-box"
    :class="{
      'is-active-current-menu': findSelectAllPath(menuChildData.path),
      'is-not-active-menu': !findSelectAllPath(menuChildData.path),
      'is-show-put-away-icon': isCollapse
    }"
    :currentPath="menuChildData.path"
    :selectArr="selectArray"
    :activePath="activeMenu"
  >
    <el-sub-menu
      v-if="menuChildData.children"
      :index="menuChildData.path"
      :title="menuChildData.title"
    >
      <template #title>
        <IconFont
          v-if="menuChildData.icon"
          :icon="menuChildData.icon"
          class="icon-item-title"
        />
        <span
          v-if="!isCollapse"
          class="title-menu-item"
        >
          {{ menuChildData.title }}
        </span>
      </template>

      <PublicMenuChildren
        v-for="(value, valIndex) in menuChildData?.children"
        :key="valIndex"
        :menu-child-data="value"
        :active-menu="activeMenu"
        :select-array="selectArray"
      />
    </el-sub-menu>

    <div
      v-else
      class="last-child-menu-item"
      :class="{
        'is-active-last-child-menu-item': findSelectAllPath(menuChildData.path),
        'is-not-last-child-active-menu': !findSelectAllPath(menuChildData.path)
      }"
    >
      <el-menu-item
        :index="menuChildData.path"
        :title="menuChildData.title"
      >
        <IconFont
          v-if="menuChildData.icon"
          :icon="menuChildData.icon"
          class="icon-item-title"
        />
        <template #title>
          <span class="title-menu-item">
            {{ menuChildData.title }}
          </span>
        </template>
      </el-menu-item>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref
} from 'vue'
import { menuLists } from '@/components/PublicMenu/index'
import { findArrayTreePath, getRoutePath } from '@/components/PublicMenu/utils/index'

export default defineComponent({
  name: 'PublicMenuChildren',
  components: {

  },
  props: {
    menuChildData: {
      type: Object,
      default: () => {
        return {}
      }
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    activeMenu: {
      type: String,
      default: ''
    },
    selectArray: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  setup(props) {

    // 获取父级及当前选中子级的path
    const getSelectData = (item: string) => {
      const selectDataArray = ref<Array<string>>([])
      selectDataArray.value = findArrayTreePath(menuLists, item).clump
      return getRoutePath(selectDataArray.value)
    }

    const findSelectAllPath = (item: any) => {

      if (!props.selectArray.length) return

      // 去除选中数组（选中当前项以及它的所有父级的数组）的空字符串项
      const getSelectArray: any = props.selectArray.filter((item) => {
        if (item) {
          return item
        }
      })

      // console.log('获取父级及当前选中子级的path', getSelectArray, getSelectArray.some((val: any) => item.includes(val)))

      // 只需要判断选中数组中最后一项是否包含当前路径就可以
      return getSelectArray[getSelectArray.length - 1].includes(item)
      // return props.selectArray.includes(item)

    }

    return {
      findSelectAllPath,
      getSelectData
    }
  }
})
</script>

<style scoped lang="scss">
.menu-chlldren-box {
  overflow: hidden;
  background-color: #2a2a2c;
  color: #D3D7DF;
  &.is-active-current-menu {
    :deep() {
      // 父级高亮
      .el-sub-menu__title {
        color: #F37021;
        .icon-item-title {
          color: #F37021;
        }
      }

      // 有子级的
      .el-sub-menu {
        .is-active-last-child-menu-item {
          .el-menu-item {
            color: #fff!important;
            border-radius: 2px;
            background-color: #FA6400!important;
            // transition: all 1000ms ease-in, background-color 2s ease;
          }
        }
      }
    }
  }
  // 没有子级的
  &.is-active-current-menu > .is-active-last-child-menu-item > .el-menu-item {
    // &.is-active {
      color: #FA6400;
      // }
  }
  .title-menu-item {
    margin-left: 12px;
  }
  &.is-show-put-away-icon {
    :deep() {
      .el-sub-menu__icon-arrow {
        display: none!important;
      }
    }
  }
  :deep() {
    .el-sub-menu__title {
      height: 40px;
      color: #D3D7DF;
      background-color: #36383D;
      &:hover {
        border-radius: 2px;
        background-color: #4A4C50!important;
      }
    }

    .el-menu-item {
      height: 40px;
      color: #D3D7DF;
      background-color: #36383D;
      &:hover {
        border-radius: 2px;
        background-color: #4A4C50!important;
      }
      span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    // 循环的子级
    .el-sub-menu {
      &.is-opened {
        .el-menu {
          .el-sub-menu__title {
            color: #D3D7DF;
            background-color: #2a2a2c;
          }
          .menu-chlldren-box {
            background-color: #2a2a2c;
            .last-child-menu-item {
              margin: 2px 4px;
            }
            .el-menu-item {
              background-color: #2a2a2c;
              span {
                overflow: hidden;
              }
            }
          }
        }
      }
    }
    .el-menu-tooltip__trigger {
      justify-content: center;
    }
    .el-tooltip__trigger {
      justify-content: center;
    }
  }
}

</style>
