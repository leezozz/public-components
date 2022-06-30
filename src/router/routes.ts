import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import basicRoutesList from '@/router/children-routes'
const LayoutView = () => import('@/components/Layout/LayoutView.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Test',
    // component: () => import('modules/DemoTest/components/index.vue')
    component: LayoutView,
    redirect: '/index',
    meta: {
      isVirtual: true
    },
    children: [
      ...basicRoutesList
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('comps/404.vue')
  }
];

// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

export default routes
