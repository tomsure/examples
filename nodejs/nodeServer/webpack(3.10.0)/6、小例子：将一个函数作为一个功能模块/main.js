
	var num1=document.getElementById("num1")
var num2=document.getElementById("num2")
var result=document.getElementById("result")

var btn=document.getElementById("btn")

   btn.onclick=function(){
   	
   	  res=require('./fn.js')   //引入模块
   	 
// 	result.value = parseInt(num1.value) + parseInt(num2.value)  //计算两个输入框的值的和

     result.value=res.addnum(parseInt(num1.value),parseInt(num2.value))

   	
   }
   



