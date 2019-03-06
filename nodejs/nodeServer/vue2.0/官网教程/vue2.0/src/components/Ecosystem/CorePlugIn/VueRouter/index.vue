<template>
  <div class=""> 
   
       vue-router
         <li><router-link :to="{name:'api'}" >API</router-link></li>
         <li> <router-link :to="{name:'guide'}">指南</router-link></li>
       
      
      
       <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="" scoped>
</style>