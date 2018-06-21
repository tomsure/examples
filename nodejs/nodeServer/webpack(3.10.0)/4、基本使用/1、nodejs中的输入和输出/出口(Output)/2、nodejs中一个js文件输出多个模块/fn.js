 
  //一次定义多个方法
 var fn1=function(){
 	console.log(1)
 }                          
 var fn2=function(){
 	console.log(2)
 }
 
 
// 一次性输出
 
  module.exports={
  	aa:fn1(),
  	bb:fn2()
  }
  
//module.exports是nodejs中的一个对象,用来输出定义的模块,由于是对象,所以可以有多个属性和方法,所以也可以定义多个模块输出
