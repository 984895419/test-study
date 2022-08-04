<template>
  <div class="info">
    <div class="header">
      <div class="header__lf" @click="routerGoBack()"> </div>
      <div class="header__title">{{ $route.meta.title }}</div>
      <div class="header__rt"></div>
    </div>
    <div class="main">
      
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
</style>