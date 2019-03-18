<template>
  <div class="">
      <h3>active-class</h3>
       <router-link :to="{name:'news'}" active-class="activeStyleClass" >新闻</router-link>
       <router-link :to="{name:'aboutUs'}">关于我们</router-link>
       <router-link :to="{name:'product'}">产品</router-link>
       <router-link :to="{name:'home'}">主页</router-link>

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