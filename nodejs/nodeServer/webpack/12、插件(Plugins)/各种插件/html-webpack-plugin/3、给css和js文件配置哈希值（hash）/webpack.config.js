

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
 	  	
        hash:true
//       有时候,引用的js或者css文件比较多,或者会产生缓存,影响开发,可以在选项中添加一个hash设置为true,这样,每次生成的html的script标签中引入的js末尾都会产生一个hash值
 	  })
 	  
 	  ]
 	  

 }
