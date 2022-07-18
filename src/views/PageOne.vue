<template>
   <div > 
      <button class="" @click="PushPageTwo()">+1</button>123123132
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
   },
   created(){

   }
}
</script>

<style>

</style>