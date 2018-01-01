

var htmlWebpackPlugin=require('html-webpack-plugin');  //这里是引入插件，并赋值给一个变量
 
   module.exports = {
 	entry:'./main.js',
 	output:{
   		path:__dirname + '/dist',
        
 		filename:'build.js'
 	},
 	  plugins: [
 	  new htmlWebpackPlugin({
 	  	title:'这是模板文件',
 	  	template:'templet/templet.html',
 	  	filename:'./html/demo.html'
 	  	//filename选项可以设置生成的html文件和路径，这个路径是在output下面的任意子目录
 	  	
 	  })
 	  
 	  ]
 	  

 }
