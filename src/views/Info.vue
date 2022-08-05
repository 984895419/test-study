<template>
  <div class="info">
    <div class="header">
      <div class="header__lf" @click="routerGoBack()"> </div>
      <div class="header__title">{{ $route.meta.title }}</div>
      <div class="header__rt"></div>
    </div>
    <div class="main">
      <div class="list">
        <div class="items">
          <div class="label"></div>
          <div class="val">出发地:黄石莲子坊</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">目的地:仙游火车站</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">出发时间:2022-5-22 10:30</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">方式:自驾车拼车</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">发布者:XXX</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">联系电话:123456789900</div>
        </div>
        <div class="items">
          <div class="label"></div>
          <div class="val">金额:12.5元</div>
        </div>
      </div>
      <div class="btns">
        <div class="items">拼车</div>
        <div class="items">取消</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routerGoBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
@tycolor: rgb(236, 195, 67);

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
    background: url('../assets/images/ico-goback.png') no-repeat center center;
    background-size: 80% 80%;
  }

  &__title {
    width: calc(100% - 2rem);
    font-size: 0.5rem;
    color: white;
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
  .list {
    background: white;

    padding: 0.3rem 0.35rem;
    box-sizing: border-box;
    width: calc(100% - 0.4rem);
    margin: 0.2rem auto 0.3rem;

    .items {
      margin: 0.4rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .label {
        width: 0.8rem;
        height: 0.8rem;
        background: url('../assets/images/ico-mudi.png')no-repeat;
        background-size: 100%;
      }

      .val {
        width: calc(100% - 1.3rem);
        font-size: 0.5rem;
        text-align: left;
      }

      &:nth-of-type(1) {
        .label {
          background: url('../assets/images/ico-mudi.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(2) {
        .label {
          background: url('../assets/images/ico-mudi1.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(3) {
        .label {
          background: url('../assets/images/ico-time.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(4) {
        .label {
          background: url('../assets/images/ico-car1.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(5) {
        .label {
          background: url('../assets/images/ico-fabu.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(6) {
        .label {
          background: url('../assets/images/ico-phone.png')no-repeat;
          background-size: 100%;
        }
      }

      &:nth-of-type(7) {
        .label {
          background: url('../assets/images/ico-money.png')no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .btns {
    display: flex;
    justify-content: space-around;
    padding: 0 0.2rem;

    .items {
      font-size: 0.5rem;
      width: calc(50% - 1rem);
      height: 1rem;
      background: red;
      line-height: 1rem;
      color: white;
      border-radius: .1rem;

      &:first-child {
        background: @tycolor;
      }

      &:last-child {
        background: #ccc;
      }
    }
  }
}
</style>