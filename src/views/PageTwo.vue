<template>
  <div>
    <pagetwo-child
      :myself="myselfdata"
      :son="sondata"
      :grandson="grandsondata"
    ></pagetwo-child>
          {{id}}
      {{value1}}
  </div>
</template>

<script>
import PagetwoChild from "./PageTwoChild.vue";
export default {
  data() {
    return {
      myselfdata: '1',
      sondata: '2',
      grandsondata: { info: "我是儿子" },
    };
  },
  props:[
    'id',
    'value1'
  ],
  components: {
    PagetwoChild,
  },
  methods: {},
};
</script>

<style>
</style>