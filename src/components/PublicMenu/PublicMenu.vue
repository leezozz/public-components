<template>
  <div class="nav-menu-top-box">
    <NavigationSideLogo :is-change-logo="isCollapse" />
    <div
      v-if="isCollapse"
      class="front-page-index-sq front-page-index-public"
      :class="{ 'active-front-index': $route.name === 'TestIndex' }"
      @click="handleJumpIndex"
    >
      <IconFont icon="icon-shouye" />
    </div>
    <div
      v-else
      class="front-page-index front-page-index-public"
      :class="{ 'active-front-index': $route.name === 'TestIndex' }"
      @click="handleJumpIndex"
    >
      <IconFont icon="icon-shouye" />
      <span class="page-index-title">首页</span>
    </div>
    <div
      :class="{
        'nav-menu-collapse': isCollapse,
        'nav-s-menu': !isCollapse
      }"
    >
      <div class="nav-s-menu-inner">
        <div class="menu-collapse-gather">
          <div
            v-for="(menuItem, menuIndex) in menuDataLists"
            :key="menuIndex"
            class="menu-item-collapse"
          >
            <el-divider class="menu-item-divider" />
            <!-- 一级标题 -->
            <div
              v-if="!isCollapse"
              class="first-level-title"
            >
              {{ menuItem.title }}
            </div>
            <el-menu
              :router="false"
              :default-active="activeMenu"
              class="el-menu-vertical-demo"
              :collapse="isCollapse"
              @select="handleSelect"
            >
              <PublicMenuChildren
                v-for="(item, index) in menuItem.children"
                :key="index"
                :is-collapse="isCollapse"
                :menu-child-data="item"
                :active-menu="activeMenu"
                :select-array="selectDataArray"
              />
            </el-menu>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="nav-menu-footer"
    @click="handleChangeShowMenu"
  >
    <!-- 收起 -->
    <IconFont
      v-if="isCollapse"
      icon="icon-jichupeizhi"
      class="icon-jinxiangxitong"
    />
    <!-- 展开 -->
    <IconFont
      v-else
      icon="icon-jinxiangxitong"
      class="icon-jinxiangxitong"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import NavigationSideLogo from '@/components/PublicMenu/PublicSideLogo.vue'
import { menuLists } from '@/components/PublicMenu/index'
import { findArrayTreePath, getRoutePath } from '@/components/PublicMenu/utils/index'

export default defineComponent({
  name: 'PublicMenu',
  components: {
    NavigationSideLogo
  },
  setup() {
    const route = useRoute()
    const router = useRouter()

    const menuDataLists = menuLists

    // 展开：false;  收起：true
    const isCollapse = ref(false)

    // 选中菜单
    const activeMenu = ref('')
    // 选中父级及自身的path
    const selectDataArray = ref<Array<string>>([])

    // 跳转首页
    const handleJumpIndex = () => {
      router.push({
        name: 'TestIndex'
      })
    }

    // 展开收起事件
    const handleChangeShowMenu = () => {
      isCollapse.value = !isCollapse.value
    }

    // 点击菜单事件
    const handleSelect = (key: string, keyPath: string[], item: any) => {
      // console.log(key, keyPath, item)
      // console.log('findSelectInfo(item, menuLists)', findSelectInfo(item, menuLists))

      router.push(findSelectInfo(item, menuLists))

      // activeMenu = 当前路由path
      activeMenu.value = item.index

      getSelectData()

    }

    // 递归，找出当前选中项的信息，拼接: path+query || path
    const findSelectInfo = (item: any, data: any) => {
      const currentPath = ref('')
      const getselectInfo = (data: any) => {
        data.forEach((val: any) => {
          if (item.index === val.path) {
            if (val?.query) {
              currentPath.value = val.path + val.query
            } else {
              currentPath.value = val.path
            }
          }

          getselectInfo(val?.children || [])
        })
      }
      getselectInfo(data)

      return currentPath.value

    }

    // ≈
    const getSelectData = () => {
      selectDataArray.value = findArrayTreePath(menuLists, activeMenu.value)?.clump || []
      selectDataArray.value.push(route.path)
      // console.log('selectDataArray', selectDataArray.value)
    }

    watch(
      () => route,
      () => {
        activeMenu.value = route.path
        getSelectData()
      },
      {
        immediate: true,
        deep: true
      }
    )

    return {
      menuDataLists,
      isCollapse,
      activeMenu,
      selectDataArray,

      handleJumpIndex,
      handleSelect,
      handleChangeShowMenu
    }
  }
})
</script>

<style lang="scss" scoped>
.nav-menu-top-box {
  user-select: none;
  height: calc(100% - 40px);
}
// navigation-side-menu
$ns: 'nav-s-menu';
.#{$ns} {
  width: 224px;
  flex: 1;
  min-height: 0;
  color: #fff;
  &-inner {
      height: 100%;
      overflow-y: auto;
    }
    .nav-s-menu-inner {
      width: 100%;
      height: 100%;
      .menu-collapse-gather {
        margin-bottom: 40px;
        .menu-item-collapse {
          width: 100%;
          .menu-item-divider {
            width: calc(100% - 20px);
            margin: 10px;
            border-color: #525459;
          }
          .first-level-title {
            height: 40px;
            line-height: 40px;
            font-weight: 500;
            // TODO
            margin: 0 20px;
          }
        }
      }

    }

}
// TODO    其他写法    .menu-item-collapse一样
.nav-menu-collapse {
    width: 64px;
    overflow: hidden;
    height: 100%;
    &-inner {
      height: 100%;
      overflow-y: auto;
    }
    .nav-s-menu-inner {
      width: 100%;
      height: 100%;
      .menu-collapse-gather {
        margin-bottom: 40px;
        .menu-item-collapse {
          width: 100%;
          .menu-item-divider {
            width: calc(100% - 20px);
            margin: 10px;
            border-color: #525459;
          }
          .first-level-title {
            height: 40px;
            line-height: 40px;
            margin: 0 24px;
            font-weight: 500;
          }
        }
      }

    }
}
.front-page-index-public {
  display: flex;
  align-items: center;
  height: 40px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &:hover {
    background: #FA6400;
  }
}
.front-page-index-sq {
  justify-content: center;
}
.front-page-index {
  padding: 0 20px 0px 20px;
  .page-index-title {
    margin-left: 10px;
  }
}

.active-front-index {
  background: #FA6400;
}
:deep() {
  .el-menu {
    border-right: 0;
  }
}

.nav-menu-footer {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2A2A2C;
  position: absolute;
  bottom: 0px;
  box-shadow: inset 0px 1px 0px 0px #525459;
  cursor: pointer;
  .icon-jinxiangxitong {
    color: #fff;
  }
}
</style>
<style lang="scss">
.el-popper {
  background-color: #FA6400;
  .el-menu--vertical {
    .el-menu--popup-right-start {
      background-color: #2a2a2c;
      .last-child-menu-item {
        padding: 2px 4px;
      }
      .el-menu-item {
        background-color: #2a2a2c;
      }
      .is-active-last-child-menu-item {
        .el-menu-item {
          color: #fff;
          border-radius: 2px;
          background-color: #FA6400!important;
        }
      }
    }
  }
}
</style>