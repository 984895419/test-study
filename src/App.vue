<template >
  <div id="app">
    <keep-alive>
      <!-- 缓存组件 -->
      <router-view v-if="$route.meta.KeepAlive" />
    </keep-alive>
    <!-- 非缓存组件 -->
    <router-view v-if="!$route.meta.KeepAlive" />
    <!-- 底部tabbar  菜单 -->
    <div class="tabbar">
      <router-link class="tabbar__item" v-for="(item, index) in tabbarList" :key="index" :to="{ name: item.urlpath }"
        active-class="_active" exact>
        <div class="tabbar__item-icon">
          <img :src="item.icopath" alt="">
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
        { icopath: require("./assets/images/ico-car2.png"), name: '顺风车', urlpath: "Home" },
        // { icopath: require("./assets/images/ico-cuz.png"), name: '分类', urlpath: "Classification" },
        { icopath: require("./assets/images/ico-tx2.png"), name: '我的', urlpath: "Myself" },
      ],
      tel: '',
      text: '',
      digit: '',
      number: '',
      password: '',
      isRouterAlive: true
    }
  },
  provide() {
    return {
      reload: this.reload
    };
  },
  methods: {
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(() => {
        this.isRouterAlive = true;
      });
    },

  }
}

</script>

<style lang="less" scoped>
@tycolor: rgb(236, 195, 67);
body {
  margin: 0 !important;
}
.tabbar__item{
  color: rgb(117,117,117);
}
._active {

  //表示router-link激活选中时的状态
  color: @tycolor;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(241, 242, 246);
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

.header {
  height: 1rem;
  background: white;
  width: 100%;
}

.tabbar {
  position: fixed;
  bottom: 0;
  height: 1.6rem;
  display: flex;
  font-size: .36rem;
  background: white;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  padding: 0 .5rem;
  box-sizing: border-box;

  &__item {
    display: block;

    &-icon {
      display: block;
      margin: 0 auto;
      width: .8rem;
      height: .8rem;

      img {
        height: .8rem;
        object-fit: cover;
      }
    }

    &-name {
      // color: rgb(117, 117, 117);
    }


  }
}
</style>
