

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
 	  	template:'templet/templet.html' ,
 	  	filename:'./html/demo.html',
 	  	minify:{
 	  		collapseWhitespace:true,  //压缩html
 	  		minifyJS:true,            //压缩js
 	  		minifyCSS:true            //压缩css
 	  		
 	  	}
// 	  	设置一个minify选项,里面的几个选项设置为true可以用来去除空格,输出一个压缩的html文件,这个minify选项还有其他功能,这里只是使用去空格压缩
 	  })
 	  
 	  ]
 	  

 }
