

var htmlWebpackPlugin=require('html-webpack-plugin');  //这里是引入插件，并赋值给一个变量
 
   module.exports = {
 	entry:'./main.js',
 	output:{
   		path:__dirname + '/dist',
        
 		filename:'build.js'
 	},
 	  plugins: [
   	  new htmlWebpackPlugin({
   	  	   title:'这是a.html',
   	  	   filename:'a.html',
   	  	   template:'templet/templet.html'
   	  }),  
 	  new htmlWebpackPlugin({
 	  	title:'这是b.html',
 	  	filename:'b.html',
 	  	template:'templet/templet.html' ,
 	  	
 	     
 	  })
 	  
 	  
// 	    如果要生成多个html文件,只需要多次使用new关键字实例化引入的插件即可,里面可以做不同的配置
 	  
 	  ]
 	  

 }
