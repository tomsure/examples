<template>
  <div class="">
     <h3>Event</h3>
       <router-link :to="{name:'append'}" event="mouseover">跳转到append</router-link>
       <router-link :to="{name:'exact'}" >跳转到axact</router-link>
       <router-link :to="{name:'tag'}">跳转到tag</router-link>
      <!-- <routwr-view></routwr-view> -->
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