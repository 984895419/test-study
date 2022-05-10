<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" active-class="active">Home</router-link> |
      <router-link to="/about" active-class="active">Vuex</router-link>|
      <router-link to="/pageone/5" active-class="active">Router</router-link>|
      <router-link to="/pagetwo" active-class="active">pagetwo</router-link>|
      <router-link to="/pagethree" active-class="active">Table</router-link>
      <div >
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>

</script>

<style lang="less">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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

</style>
