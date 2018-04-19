var express=require('express');  //引入express
 var app=express()  //创建应用
 app.get('/',function(req,res){
 	  res.send('success')
 })


//使用app.use()方法进行静态化处理
 //在默认情况下，浏览器通过地址和端口访问不到静态资源，静态资源值的就是静态网页，图片等，这这种情况下如果要访问静态资源就要使用app.use()方法里面再执行express.static('') 方法才能访问到 
   // 例如: 要访问 'images' 目录下的 图片 1.index.png,需要使用app.use方法:
          app.use(express.static('images'))
        //express.static('images')  方法中的images就是目录名，浏览器仿问的时候直接在端口号后面输入images目录里面的路径和文件名即可
           
          
 

app.listen('1234',function(){
	console.log('success')
})
