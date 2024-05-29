import { createMemoryHistory, createRouter } from 'vue-router'
import ComponentsView from '../views/ComponentsView.vue'
import WebComponentsView from '../views/WebComponentsView.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ComponentsView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/webcomponents',
      name: 'webcomponents',
      component: WebComponentsView
    }
  ]
})

export default router