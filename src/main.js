import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './rem' //获取html font-size
import './assets/less/gb.css'
import './orientation'  //横竖屏翻转动画
import './swiper.min.css' 


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

new OrientationMobile({
  dir: 'landscape', // vertical 竖屏 landscape 横屏
  tip: '请翻转屏幕' // 提示语
})


Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
