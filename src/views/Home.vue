<template>
  <div class="home">
    <div class="header">

      <div class="header__lf"></div>
      <input class="header__search" />
      <div class="header__rt"></div>
    </div>
    <div class="main">
      <div class="banner">
        <!-- swiper 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
            <div class="swiper-slide">Slide 5</div>
            <div class="swiper-slide">Slide 6</div>
            <div class="swiper-slide">Slide 7</div>
            <div class="swiper-slide">Slide 8</div>
            <div class="swiper-slide">Slide 9</div>
            <div class="swiper-slide">Slide 10</div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="iconlist">
        <div class="items" v-for="(item, index) in iconList" :key="index">
          <div class="items__ico">
            <img class="items__ico-img" :src="item.icopath" />
          </div>
          <div class="items__label">{{ item.name }}</div>
        </div>
      </div>
      <div class="nowactivity">
        当前活动
      </div>
      <div class="recommend">
        更多的业务页面
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import Swiper from "swiper"
export default {
  name: 'Home',
  components: {
    HelloWorld,
    Swiper,

  },
  data() {
    return {

      iconList: [
        { icopath: "../assets/logo.png", name: '美妆个护' },
        { icopath: "../assets/logo.png", name: '瓜分积分' },
        { icopath: "../assets/logo.png", name: '分享赚' },
        { icopath: "../assets/logo.png", name: 'PLUS会员' },
        { icopath: "../assets/logo.png", name: '云风客服' },
        { icopath: "../assets/logo.png", name: '母婴玩具' },
        { icopath: "../assets/logo.png", name: '服饰鞋饰' },
        { icopath: "../assets/logo.png", name: '电脑数码' },
        { icopath: "../assets/logo.png", name: '家居家装' },
        { icopath: "../assets/logo.png", name: '农特生鲜' },
      ]
    }
  },
  mounted() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      paginationClickable: true,
    });
  }
}
</script>
<style scoped lang="less">
.home {
  font-size: 0.4rem;
  color: white;

  .header {
    height: 1.5rem;
    background: red;
    display: flex;
    padding: 0 0.2rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    &__lf {
      width: 0.8rem;
      height: 0.8rem;
      background: blue;
    }

    &__search {
      width: calc(100% - 2rem);
      height: 0.7rem;
      border-radius: 1rem;
      border: none;
      outline: none;
      padding: 0 0.3rem;
      box-sizing: border-box;
    }

    &__rt {
      width: 0.8rem;
      height: 0.8rem;
      background: blue;
    }
  }

  .main {
    height: calc(100vh - 2.6rem);
    background: rebeccapurple;
    overflow-y: scroll;
    overflow-x: hidden;

    .banner {
      height: 3rem;
      background: orange;
      margin-top: 0.2rem;
      box-sizing: border-box;
    }

    .iconlist {
      display: flex;
      flex-wrap: wrap;
      padding: 0.2rem 0.2rem 0;
      justify-items: center;
      box-sizing: border-box;
      justify-content: space-between;

      .items {
        width: calc(20% - 0.1rem);
        margin: 0.1rem 0;
        min-height: 1.2rem;
        background: green;
        font-size: 0.3rem;

        &__ico {
          width: 0.5rem;
          height: 0.5rem;
          background: fuchsia;
          margin: 0.1rem auto;
        }
      }
    }

    .nowactivity {
      background: pink;
      height: 2rem;
      width: calc(100% - 0.4rem);
      margin: 0.2rem auto 0;
    }

    .recommend {
      height: 8rem;
      background: salmon;
      margin: 0.2rem auto 0.2rem;
      width: calc(100% - 0.4rem);
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }


}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
