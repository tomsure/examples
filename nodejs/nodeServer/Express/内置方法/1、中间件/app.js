var express=require('express')
var app=express()


 app.get('/',function(req,res){
 	   res.send('欢迎')
 })
// '/'表示请求到的位置
 
 
 app.get('/user',function(req,res){
// 	....
 })
 
 app.get('/images',function(req,res){
// 	....
 })
 
// app.get()方法这样的执行叫做中间件



 app.listen(5000,function(){
 	  console.log('seccess')
 })
