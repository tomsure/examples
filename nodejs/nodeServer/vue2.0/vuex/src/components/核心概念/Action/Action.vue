<template>
  <div id>
    <Demo1Btn />
    <p>Action</p>
    <p></p>
    <p>{{$store.state.count}}</p>
    <button @click="actionMethods()">使用Action改变数据</button>
    <!--这里每点击一次，数字都会减去1，是因为此时执行了this.$store.dispatch('changeData')，而这个方法是调用了vuex里面定义的actions里，里面的方法，通过$store.dispatch()方法访问，参数就传actions里面定义的方法-->
  </div>
</template>

<script>
import Demo1Btn from '../../Demo1Btn'
	export default{
		components:{
         Demo1Btn
		},
  data () {
    return {}
  },
  methods: {
    actionMethods () {
      this.$store.dispatch('changeData')
    }
  }
}
</script>

<style>
</style>