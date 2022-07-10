// Vue Component Install
// import { App } from 'vue'
import LayoutArea from '../components/Layout/LayoutArea.vue'
import LayoutSection from '../components/Layout/LayoutSection.vue'
import PublicSideLogo from '../components/PublicMenu/PublicSideLogo.vue'
import PublicMenuChildren from '../components/PublicMenu/PublicMenuChildren.vue'
import IconFont from '../components/IconFont/index.vue'

const componentList = [
  IconFont,
  LayoutArea,
  LayoutSection,
  PublicSideLogo,
  PublicMenuChildren
]

const component = {
  install(app: import('vue').App<any>) {
    componentList.forEach((item: any) => {
      app.component(item.name, item)
    })
  }
}

export default component
