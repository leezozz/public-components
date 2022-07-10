import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/fonts'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import components from '@/components'
import PublicMenu from '@/components/index'
// 引入组件
import MyComponents from 'lib/my-components-base.es.js'

const app = createApp(App)

app
  .use(router)
  .use(ElementPlus)
  .use(components)
  .use(PublicMenu)
  .use(MyComponents)
  .use(createPinia())

app.mount('#app')