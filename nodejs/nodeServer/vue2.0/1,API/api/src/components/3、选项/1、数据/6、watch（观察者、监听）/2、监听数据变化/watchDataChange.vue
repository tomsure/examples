<template>
	<input type="" v-model="Ntext"  />
</template>

<script>
	export default{
       data(){
       	  return{
       	  	Ntext:'100'
       	  }
       },
       watch:{
          Ntext(newData,oldData){
             console.log("新的值是:"+newData,"旧的值是:"+oldData)
          }
       }
	}

//	 watch选项可以监控data数据的变化,例如上面的例子中,input元素绑定了data中的Ntext数据,当input中的值改变的时候,由于双向绑定,data的值也会改变,此时就会触发watch中的选项,里面的写法是方法名称就是data中监测的数据名称,方法有两个参数,第一个参数是修改后的数据,第二个是修改前的数据
</script>

<style>
</style>