import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'lib-flexible/flexible'

// 
import './rem' //获取html font-size
// import './flexible' //获取html font-size
// import './flexible.css' //获取html font-size
import './assets/less/gb.less'
import './orientation'  //横竖屏翻转动画
import './swiper.min.css' 

import { Field } from 'vant';

Vue.use(Field);

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
