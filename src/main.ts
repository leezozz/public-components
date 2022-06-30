import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/assets/fonts'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import components from '@/components'



const app = createApp(App)

app
  .use(router)
  .use(ElementPlus)
  .use(components)
  .use(createPinia())

app.mount('#app')