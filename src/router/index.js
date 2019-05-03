import Vue from 'vue'
import Router from 'vue-router'
import Shop from '@/components/Shop'
import Basket from '@/components/Basket'
import Page404 from '@/components/Page404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/*',
      name: 'page404',
      component: Page404
    }
  ]
})
