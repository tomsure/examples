<template>
  <div class="">
      <router-link :to='{name:"attr"}'>属性</router-link>
      <router-link :to="{name:'exactActiveClass'}">exact-active-class</router-link>
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