<template >
  <div id="app">
    <router-view />
    <!-- 底部tabbar  菜单 -->
    <div class="tabbar">
      <router-link class="tabbar__item" v-for="(item, index) in tabbarList" :key="index" :to="{ name: item.urlpath }"
        active-class="_active" exact>
        <div class="tabbar__item-icon">
          <img :src="`${item.icopath}`" alt="">
        </div>
        <div class="tabbar__item-name">{{ item.name }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabbarList: [
        { icopath: "../assets/logo.png", name: '首页', urlpath: "Home" },
        { icopath: "../assets/logo.png", name: '兑换中心', urlpath: "MoneyChanger" },
        { icopath: "../assets/logo.png", name: '分类', urlpath: "Classification" },
        { icopath: "../assets/logo.png", name: '购物车', urlpath: "ShoppingCart" },
        { icopath: "../assets/logo.png", name: '我的', urlpath: "Myself" },
      ],
    }
  }
}

</script>

<style lang="less" scoped>
body {
  margin: 0 !important;
}

._active {

  //表示router-link激活选中时的状态
  color: pink;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: green;
  width: 100%;
  height: 100vh;
}

body,
* {
  margin: 0;
  padding: 0;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

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
    display: block;



    &-icon {
      display: block;
      width: .2rem;
      height: .2rem;

      img {
        height: .2rem;
        object-fit: cover;
      }
    }


  }
}
</style>
