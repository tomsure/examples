<template>
  <div class="">
      <router-link :to="{name:'beforeEach'}">beforeEach</router-link>
      <router-link :to="{name:'beforeResolve'}">beforeResolve</router-link>
      <router-link :to="{name:'afterEach'}">afterEach</router-link>
      <router-link :to="{name:'push'}">push</router-link>
      <router-link :to="{name:'replace1'}">replace</router-link>
      <router-link :to="{name:'go'}"> go</router-link>
      <router-link :to="{name:'back'}">back</router-link>
      <router-link :to="{name:'forward'}">forward</router-link>
      <router-link :to="{name:'getMatchedComponents'}">getMatchedComponents</router-link>
      <router-link :to="{name:'resolve'}">resolve</router-link>
      <router-link :to="{name:'addRoutes'}">addRoutes</router-link>
      <router-link :to="{name:'onReady'}">onReady</router-link>
      <router-link :to="{name:'onError'}">onError</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {

    }
  } ,
 
  
  methods:{
    
  }
 }
</script>

<style lang="" scoped>
</style>