<template>
  <div>
    我是页面2儿子
    <Pagetwo-Grandson />
  </div>
</template>

<script>
import PagetwoGrandson from "./PageTwogGrandson";
export default {
  name: "PageTwoChild",
  components: {
    PagetwoGrandson,
  },
};
</script>

<style>
</style>