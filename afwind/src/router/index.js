import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/index.vue'
import Register from '../components/register.vue'
import Login from '../components/login.vue'
import goods from '../pages/goods.vue'
import goodsDetails from '../pages/gooddetails.vue'
import companyInfo from '../components/companyinfo.vue'
import myAccount from '../pages/myAccount.vue'
import accountSec from '../pages/accountSec.vue'
import shippingAddr from '../pages/shippingAddr.vue'

Vue.use(Router);

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
    },
    {
      path:'/goodsDetails',
      component:goodsDetails
    },
    {
      path:'/companyInfo',
      component:companyInfo
    },
    {
      path:'/myAccount',
      component:myAccount
    },
    {
      path:'/accountSec',
      component:accountSec
    },
    {
      path:'/shippingAddr',
      component:shippingAddr
    }
  ]
})
