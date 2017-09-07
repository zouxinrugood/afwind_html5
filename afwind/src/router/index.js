import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import goods from '../pages/goods.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/goods',
      component:goods
    }
  ]
})
