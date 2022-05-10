import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 基础值
  state: {
    num: 0,
    name: "sjn"
  },
  // 类似computed  计算属性 的衍生品
  getters: {
    //定义Getter 
    NumText(state) {
      return '当前的num值为: ' + state.num
    }
  },
  // 类似methods  方法
  mutations: {
    numAddN(state, n) {
      //num自增n
      state.num += n;
    },
    numAddOne(state) {
      //num自增1
      state.num++;
    }
  },
  // 处理异步任务
  actions: {
    numAddOneAsync(context) {
      setTimeout(() => {
        context.commit('numAddOne')
      }, 1000)
    },
    numAddNAsync(context, n) {
      setTimeout(() => {
        context.commit('numAddN', n)
      }, 1000)
    },
  },
  modules: {}
})