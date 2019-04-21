<template>
  <div class="">
        <router-link :to="{name:'name'}">name属性</router-link>
          <router-view class="main" name="a"></router-view>
          <router-view class="main"></router-view>
            <!--name省略表示name='default'-->
          <router-view class="main" name="b"></router-view>
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