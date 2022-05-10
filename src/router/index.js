import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PageTwo from '../views/PageTwo.vue'

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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/pageone/:id',
    name: 'PageOne',
    // 按需加载路由   不利于打包   后期组件多了会影响打包速度
    component: resolve => require(['../views/PageOne.vue'],resolve),
  },
  {
    path: '/pagetwo',
    name: 'PageTwo',
    // 路由懒加载
    component: resolve => require(['../views/PageTwo.vue'],resolve),
    meta:{title:'页面2'}
  },
  {
    path: '/pagethree',
    name: 'PageThree',
    // 路由懒加载
    component: resolve => require(['../views/PageThree.vue'],resolve),
    meta:{title:'页面3'}
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