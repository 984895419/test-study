import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/moneychanger',
    name: 'MoneyChanger',  //兑换中心
    component: () => import( /* webpackChunkName: "about" */ '../views/MoneyChanger.vue')
  },
  {
    path: '/classification',//分类
    name: 'Classification',
    component: () => import( /* webpackChunkName: "about" */ '../views/Classification.vue')
  },
  {
    path: '/shoppingcart',//购物车
    name: 'ShoppingCart',
    component: () => import( /* webpackChunkName: "about" */ '../views/ShoppingCart.vue')
  },
  {
    path: '/myself',//我的
    name: 'Myself',
    component: () => import( /* webpackChunkName: "about" */ '../views/Myself.vue')
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next) =>{
  // 给跳转的标题赋值  特别是matched 这个属性
   window.document.title = to.matched[0].meta.title
   console.log(to)
   next()
})

export default router