var http = require('http');   //创建加载http模块
   
   http.createServer(function(req,res){
   	  res.writeHead(200, {'Content-Type': 'text/plain'}); //写入头部信息

	// 发送响应数据 "Hello World"
	res.end('Hello World\n');  //当收到响应后在页面点这条信息
   }).listen(8000)
     console.log('127.0.0.1:8000')  //执行server.js后打做出提示
 

// 创建http服务器步骤:
//    1,使用nodejs的reuqire()方法引入http并赋给变量,取名http;
//    2,执行http对象的createServer()方法,方法内部执行一个函数,这个函数传入两个参数,第一个参数是请求的数据这里使用req作为参数,第二个参数是收到请求后响应到页面的数据,这里使用res作为参数
//    3,在上面的createServer()方法内部函数内req和res都是对象,使用req的wited方法写入请求的头部信息,使用res的end()方法内部写入一段字符串,这段字符串就是收到请求后打印到页面的数据;
//    4,使用http对象的listen方法设置服务器的监听端口号,也可以使用链式调用的方式设置,例如上面.
