import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import Reg from '../components/register.vue'

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
      component:Reg
    }
  ]
})
