<template>
   <div class="">

   	    <input type="" v-model="message"  name="" id="" value="" />
   </div>
</template>
<script type="text/javascript">
	export default{

   data(){
     return {
     	message:'123'
     }
   },

      //每个Vue实例在被创建之前都要经过一系列的初始化过程,这个过程就是vue的生命周期，在生命周期中也就是Vue实例创建过程中，会有很多方法在不同的状态下可以执行
      beforeCreate(){
      //	alert('1、beforeCreate:初始化之后')
      	  console.group('------beforeCreate创建前状态------');
      console.log("%c%s", "color:red" , "el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //undefined
      console.log("%c%s", "color:red","message: " + this.message) //undefined
      },

//    1, 在beforeCreate和created钩子函数之间的生命周期
//在这个生命周期之间，进行初始化事件，进行数据的观测，可以看到在created的时候数据已经和data属性进行绑定（放在data中的属性当值发生改变的同时，视图也会改变）。
      //注意看下：此时还是没有el选项
   created(){
  //  alert('1、created'+ this.$el)
    console.group('------created创建完毕状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化:123
   },
    beforeMount(){ //此阶段无法操作DOM
  // 	alert("2、beforeMount")
   	 console.group('------beforeMount挂载前状态------');
      console.log("%c%s", "color:red","el     : " + (this.$el)); //未被初始化:"undefined"
      console.log(this.$el);//undefined
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
   },
   mounted(){
   //	alert("3、mounted")
   	 console.group('------mounted 挂载结束状态------');
      console.log("%c%s", "color:red","el     : " + this.$el); //已被初始化
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data); //已被初始化
      console.log("%c%s", "color:red","message: " + this.message); //已被初始化
   },

    //页面打开的时候，只会执行到monted

   beforeUpdate(){
   //	alert("4、beforeUpdate")
   	console.group('beforeUpdate 更新前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
   },
   updated(){
   //	alert('5、updated')
   	 console.group('updated 更新完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
   },
     //beforeUpdate和updated是绑定的数据更新时候触发的函数，例如这里，在data中写了message,并绑定到input元素上，当input元素的值代表的时候，此时先会执行beforeUpdate，然后在执行updated()



   activated(){//keep-alive相关
  // 	alert('6、activated')

   },
   deactivated(){//keep-alive相关
  // 	alert("7、deactivated")
   },
   beforeDestroy(){
   //	alert('8、beforeDestroy')
   	console.group('beforeDestroy 销毁前状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message);
   },
   destroyed(){
  // 	alert('9、destroyed')
   	 console.group('destroyed 销毁完成状态===============》');
      console.log("%c%s", "color:red","el     : " + this.$el);
      console.log(this.$el);
      console.log("%c%s", "color:red","data   : " + this.$data);
      console.log("%c%s", "color:red","message: " + this.message)
   },


   errorCaptured(){
  // 	alert('10、errorCaptured')
   },
   watch:{

   }


	}
</script>
