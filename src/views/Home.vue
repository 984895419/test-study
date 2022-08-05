<template>
  <div class="home">
    <div class="header">
      <div class="header__lf" @click="gohome()"> </div>
      <div class="header__title">{{ $route.meta.title }}</div>
      <div class="header__rt"></div>
    </div>
    <div class="main">
      <div class="search">
        <input type="text">
        <div class="icon"></div>
      </div>
      <card :data="recordList" />
    </div>

  </div>
</template>

<script>

import card from '../components/Card.vue'
export default {
  name: 'Home',
  components: {
    card
  },
  data() {
    return {
      recordList: [
        {
          departureTime: " 6月1日 09:45 ",
          resrNum: "3",
          departurePlace: "莆田动车站",
          destination: "仙游动车站"
        },
        {
          departureTime: " 6月23日 09:45 ",
          resrNum: "3",
          departurePlace: "语湖中心",
          destination: "正荣财富中心"
        },
        {
          departureTime: " 6月3日 09:45 ",
          resrNum: "3",
          departurePlace: "廉租房",
          destination: "汽车站"
        }
      ]
    }
  },
  methods: {
    gohome() {
      this.$router.push('/myself')
    },
    viewDetails(data) {
      this.$router.push('/info')
    }
  },

}
</script>
<style scoped lang="less">
@tycolor: rgb(236, 195, 67);

.home {
  font-size: 0.4rem;
  color: white;

  .header {
    height: 1.5rem;
    background: @tycolor;
    display: flex;
    padding: 0 0.2rem;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;

    &__lf {
      width: 1.1rem;
      height: 1.1rem;
      background: url('../assets/images/ico-tx1.png')no-repeat;
      background-size: 100%;
    }

    &__title {
      width: calc(100% - 2rem);
      font-size: 0.5rem;
    }

    &__search {
      width: calc(100% - 2.6rem);
      height: 0.7rem;
      border-radius: 1rem;
      border: none;
      outline: none;
      color: black;
      padding: 0 0.3rem;
      box-sizing: border-box;
    }

    &__rt {
      width: 1.1rem;
      height: 1.1rem;
      // background: blue;
    }
  }

  .main {
    height: calc(100vh - 2.6rem);
    overflow-y: scroll;
    overflow-x: hidden;
    padding-top: 0.2rem;

    .search {
      position: relative;
      width: calc(100% - 0.6rem);
      height: 1rem;
      margin: 0 auto 0;
      border-radius: 0.2rem;
      background: white;
      box-shadow: 0.02rem 0.02rem 0.1rem rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      overflow: hidden;
      justify-content: center;

      input {
        width: 100%;
        height: 100%;
        margin: 0 auto 0;

        color: black;
        padding: 0 0.3rem;
        box-sizing: border-box;
      }

      .icon {
        position: absolute;
        width: 0.5rem;
        height: 0.5rem;
        background: url('../assets/images/ico-search.png')no-repeat;
        background-size: 100%;
      }

      .word {
        color: black;
        margin-left: 0.2rem;
      }
    }

    .list {
      width: calc(100% - 0.6rem);
      margin: 0 auto;
      padding: 0.2rem 0;
      box-sizing: border-box;

      .items {
        min-height: 3rem;
        color: black;
        background: white;
        padding: 0.3rem;
        border-radius: 0.2rem;
        box-sizing: border-box;
        margin-top: 0.4rem;
        box-shadow: 0.06rem 0.06rem 0.2rem rgba(0, 0, 0, 0.3);

        &:first-child {
          margin-top: 0;
        }

        .info {
          display: flex;
          align-items: center;
          justify-content: space-around;

          &-lf {
            font-size: 0.55rem;
          }

          &-rt {
            .rt-red {
              color: red;
            }
          }
        }

        .address {
          margin: 0.3rem 0rem;
          font-weight: 600;
          font-size: 0.45rem;
          padding: 0 0.35rem;
          box-sizing: border-box;
          position: relative;

          &::before {
            position: absolute;
            content: '';
            width: 0.3rem;
            height: 0.3rem;
            background: green;
            border-radius: 50%;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
          }
        }

        .btns {
          width: 50%;
          margin: 0.3rem auto 0.1rem;
          color: white;
          height: 0.8rem;
          background: @tycolor;
          line-height: 0.8rem;
          border-radius: 0.3rem;
        }
      }

    }
  }
}
</style>
