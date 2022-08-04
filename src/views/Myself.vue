<template>
  <div class="page">
    <div class="header">
      <div class="header-ico"></div>
      <div class="header-info">
        <div class="info-username">XXXXX</div>
        <div class="info-phone">178050000000</div>
      </div>
    </div>
    <div class="list">
      <div class="items">
        <div class="items-ico">
        </div>
        <div class="items-name">拼车记录</div>
      </div>
      <div class="items">
        <div class="items-ico">
        </div>
        <div class="items-name">发布记录</div>
      </div>
      <div class="items" @click="pushconfig()">
        <div class="items-ico">
        </div>
        <div class="items-name">设置</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  created(){
  },
  mounted(){
  },
  methods:{
    pushconfig(){
     this.$router.go(0)
     this.reload()
    }
  }
}
</script>

<style lang="less" scoped>
.page {
  font-size: 0.4rem;
  color: white;

  .header {
    padding: 0.5rem 0;
    box-sizing: border-box;
    height: 3.6rem;
    width: 100%;
    background: linear-gradient(rgb(252, 214, 196), rgb(241, 242, 246));
    display: flex;
    align-items: center;

    &-ico {
      width: 2.3rem;
      height: 2.3rem;
      background: url('../assets/images/ico-tx.png')no-repeat;
      background-size: 100%;
      border-radius: 50%;
      margin-left: 0.3rem;
    }

    &-info {
      color: rgb(8, 7, 7);
      text-align: left;
      margin-left: 0.5rem;

      .info-username {
        font-weight: 600;
        font-size: 0.5rem;
      }

      .info-phone {
        font-size: 0.4rem;
        margin-top: 0.2rem;
      }
    }
  }

  .list {
    width: calc(100% - 0.6rem);
    margin: 0rem auto;
    background: white;
    height: 3.5rem;
    box-sizing: border-box;
    box-shadow: .06rem .06rem .2rem rgba(0, 0, 0, 0.3);
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .items {
      width: 2rem;
      color: black;
      font-weight: bold;

      &:nth-child(1) {
        .items-ico {
          margin: 0 auto;
          width: 1.1rem;
          height: 1.1rem;
          background: url('../assets/images/car.png')no-repeat;
          background-size: 100%;
        }

        .items-name {
          margin-top: 0.3rem;
        }
      }

      &:nth-child(2) {
        .items-ico {
          margin: 0 auto;
          width: 1.1rem;
          height: 1.1rem;
          background: url('../assets/images/dingdan.png')no-repeat;
          background-size: 100%;
        }

        .items-name {
          margin-top: 0.3rem;
        }
      }

      &:nth-child(3) {
        .items-ico {
          margin: 0 auto;
          width: 1.1rem;
          height: 1.1rem;
          background: url('../assets/images/config.png')no-repeat center;
          background-size: 160% 160%;
        }

        .items-name {
          margin-top: 0.3rem;
        }
      }

    }
  }
}
</style>