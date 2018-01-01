

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
 	  	template:'templet/templet.html'   //配置模板文件。使用template选项，再设置模板文件的路径即可，如果需要给页面文件设置自定义的title，可以在这里title里面设置title文字，再在模板文件中的title中加入<%= htmlWebpackPlugin.options.title %>这段话
 	  })
 	  
 	  ]
 	  

 }
