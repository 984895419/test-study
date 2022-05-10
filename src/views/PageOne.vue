<template>
   <div > 
      <button class="" @click="PushPageTwo()">+1</button>
      {{this.$route.params.id}}
   </div>
</template>

<script>
export default {
   data(){
       return{

       }
   },
   methods:{
       PushPageTwo(){
        //    this.$route.push({name:'pagetwo',params:{id:5}})
       }
   }
}
</script>

<style>

</style>