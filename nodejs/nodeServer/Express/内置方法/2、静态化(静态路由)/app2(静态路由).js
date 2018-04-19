var express=require('express')
var app=express()
	
//	app.use(express.static('images'))
	app.use('/aaa',express.static('images'))
	
//	在app.use()方法中第一个位置添加一个参数可以改变静态文件url指向,在默认情况下,通过app.use()方法静态化后,启动这个文件后,通过浏览器输入地址和端口号及对应的文件名就可以获取到资源,
//	但是在添加第一个参数后,就不能这样获取到,必须将设置的参数添加在浏览器输入的端口号后面文件路径名前面,例如这里
//	 必须在浏览器输入
//	    localhost:1000/aaa/1index,png才能访问到 1index.png这个文件
	
	
	app.listen(1000,function(){
		 console.log('success')
	})
