<template>
  <div class="">
   beforeEach
     <div>
        
       <router-link :to="{name:'push'}">其他页面</router-link> 
       <router-link :to="{name:'login'}">login页面</router-link> 
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data() { 
    return {
      
    }
  },
  created(){
      
     this.$router.beforeEach(function(to,from,next){
         console.log(to)
         console.log(from)
         if(to.name=='login'){
           next()
         }else {
          alert('你还没登陆，请登录')
             next('login')
         }
       
     }) 

      // beforeEach方法用于设置路由跳转之前的拦截，方法的参数是一个函数，这个函数有三个参数:
      //  to,返回跳转后的路由信息，
      //  from:表示跳转前的路由信息，
      //  next：是一个方法，用于执行下一步操作，如果是空，则继续执行跳转路由，里面参数可以写需要跳转到的路由的path
      //  用途：当把这个方法放在main.js中全局使用的时候，可以用来检测用户是否登录，在beforeEach（）的方法中检测登录状态即可
  },
  methods:{
   
  }
 }
</script>

<style lang="" scoped>
</style>