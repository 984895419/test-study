<template>
  <div>
    <button type="submit">
      <slot>{{msg}}</slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        msg:''
    };
  },
};
</script>

<style>
</style>