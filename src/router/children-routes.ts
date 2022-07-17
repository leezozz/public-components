import { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/components/Layout/index.vue')
const LayoutView = () => import('@/components/Layout/LayoutView.vue')

const basicRoutesList: Array<RouteRecordRaw & CustomizeRouter> = [
  {
    path: '/index',
    name: 'TestIndex',
    component: () => import('@/modules/DemoTest/pages/index.vue')
  },
  {
    path: '/menus',
    name: 'Menus',
    component: () => import('@/modules/DemoTest/pages/test-menu.vue')
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import('@/modules/DemoTest/pages/test-table.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import('@/components/PublicTableEditNew/index.vue')
  }
]

export default basicRoutesList