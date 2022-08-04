import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: false,
      title: "顺风车"
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/releaseRecord', //分类
    name: 'Releaserecord',
    component: () => import( /* webpackChunkName: "about" */ '../views/ReleaseRecord.vue')
  },
  {
    path: '/myself', //我的
    name: 'Myself',
    component: () => import( /* webpackChunkName: "about" */ '../views/Myself.vue')
  },
  {
    path: '/info', //查看详情
    name: 'Info',
    component: () => import( /* webpackChunkName: "about" */ '../views/Info.vue'),
    meta: {
      title: "查看详情"
    }
  },
  {
    path: '/carpoolrecord', //拼车记录
    name: 'CarpoolRecord',
    component: () => import( /* webpackChunkName: "about" */ '../views/CarpoolRecord.vue'),
    meta: {
      title: "拼车记录"
    }
  },
  {
    path: '/ReleaseRecord', //发布记录
    name: 'ReleaseRecord',
    component: () => import( /* webpackChunkName: "about" */ '../views/ReleaseRecord.vue'),
    meta: {
      title: "发布记录"
    }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // 给跳转的标题赋值  特别是matched 这个属性
  window.document.title = to.matched[0].meta.title
  console.log(to)
  next()
})

export default router