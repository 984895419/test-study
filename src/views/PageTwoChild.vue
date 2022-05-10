<template>
  <div>
    我是页面2的儿子
    <p>props: {{ myselfdata }}</p>
    <!-- <p>$attrs: {{ $attrs }}</p>
    <Pagetwo-Grandson v-bind="$attrs" v-on="$listeners" /> -->
  </div>
</template>

<script>
import PagetwoGrandson from "./PageTwogGrandson";
export default {
  name: "PageTwoChild",
  components: {
    PagetwoGrandson,
  },
  props: {myselfdata:{

  }},
  inheritAttrs: false,
  data() {  
    return {};
  },
};
</script>

<style>
</style>