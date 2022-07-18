<template>
  <div class="home">
    <div class="header">
      <div class="header__lf"></div>
      <input class="header__search" />
      <div class="header__rt"></div>
    </div>
    <div class="main">
      <div class="iconlist">
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
        <div class="items"></div>
      </div>
      <div class="recommend"></div>
    </div>
    <div class="tabbar">
      <div class="tabbar__item" v-for="(item,index) in tabbarList" :key="index">
        <div class="tabbar__item-icon">
          <img :src="item.icopath" alt="">
        </div>
        <div class="tabbar__item-name">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      tabbarList: [
        { icopath: "../assets/logo.png", name: '首页' },
        { icopath: "../assets/logo.png", name: '兑换中心' },
        { icopath: "../assets/logo.png", name: '分类' },
        { icopath: "../assets/logo.png", name: '购物车' },
        { icopath: "../assets/logo.png", name: '我的' },
        ]
    }
  }
}
</script>
<style scoped lang="less">
.home {
  background: green;
  width: 100%;
  height: 100vh;

  .header {
    height: 1.5rem;
    background: red;
    display: flex;
    padding: 0 0.2rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    &__lf{
       width:0.8rem;
       height: 0.8rem;
       background: blue;
    }
    &__search{
      width: calc(100% - 2rem);
       height: 0.7rem;
       border-radius: 1rem;
       border: none;
       outline:none;
       padding: 0 0.3rem;
       box-sizing: border-box;
    }
    &__rt{
           width:0.8rem;
            height: 0.8rem;
            background: blue;
    }
  }

  .main {}

  .tabbar {
    position: fixed;
    bottom: 0;
    height: 1.1rem;
    display: flex;
    font-size: .36rem;
    background: red;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 .2rem;
    box-sizing: border-box;

    &__item {
      background: yellow;
       &-icon{
        display: block;
        width: .2rem;
        height: .2rem;
        img{
          height: .2rem;
          object-fit: cover;
        }
       }
       &-iconamen{}
    }
  }
}
</style>
