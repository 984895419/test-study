<template>
  <div class="about">
    <!-- VUEX 基础 -->
    <h1>This is an about page</h1>
    <h1 class="">{{ this.$store.state.num }}</h1>
    <button class="" @click="addOne">+1</button>
    <button @click="addOneAsync">+ 1 Async</button>
    <h1 class="">{{ num }}</h1>
    <button class="" @click="numAddN(3)">+n</button>
    <button @click="numAddNAsync(5)">+ n Async</button>
    <h1 class="">{{ this.$store.state.name }}</h1>
    <h1 class="">{{ name }}</h1>
    <h1>{{this.$store.getters.NumText}}</h1>
    <h1>{{NumText}}</h1>
  </div>
</template>
<script>
// 访问数据第二种方式 导入vuex 再计算属性全局映射
import { mapState, mapMutations ,mapActions,mapGetters} from 'vuex' 

export default {
  data(){
    return{
      // 访问数据第一种方式
    }
  },
  methods:{
    addOne(){
       this.$store.commit('numAddOne')  //触发 mutations 的第一种方式     
    },
    addOneAsync(){
       this.$store.dispatch('numAddOneAsync')  //触发 Action 的第一种方式   dispatch有点不太一样
    },
    ...mapMutations(['numAddN']),
    ...mapActions(['numAddNAsync']) 
    // ...mapActions(['numAddNAsync']) 
  },
  computed: {
    // 访问数据第二种方式 导入vuex 再计算属性全局映射 //将全局数据，映射为当前组件的计算属性 
    ...mapState(["num","name"]),
    ...mapGetters(['NumText']) 
  }
}
</script>