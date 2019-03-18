<template>
  <div class="">
   <router-link :to="{name:'vueRouter'}">教程</router-link>
   <router-link :to="{name:''}">API</router-link>
   <router-link :to="{name:'vueRouter'}">路由</router-link>
   <button @click="toVuex">vuex</button>
   <router-view class="box"></router-view>  <!--router-view -->
    
  </div>
</template>
<script>
export default {
  methods:{
    toVuex(){
      this.$router.push({name:'vuex'})
    }
  }
 }
</script>
<style lang="" scoped>
</style>