import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible/flexible'

// 
// import './rem' //获取html font-size
// import './flexible' //获取html font-size
// import './flexible.css' //获取html font-size
import './orientation'  //横竖屏翻转动画
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
