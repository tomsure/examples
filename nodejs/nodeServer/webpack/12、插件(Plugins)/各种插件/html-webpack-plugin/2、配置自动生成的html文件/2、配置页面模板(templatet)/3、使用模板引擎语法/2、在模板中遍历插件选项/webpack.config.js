

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
 	  	tangxuName:'汤旭'
/*
 	  	这里的每个选项对应的是模板html文件中的<%= htmlWebpackPlugin.options.Name %>中htmlWebpackPlugin.options.Name 的'Name'的值,这个是ejs语法,例如这里:
 	  	   <%= htmlWebpackPlugin.options.title%> 指的就是这里的"这是模板文件",这几个字符串;
 	htmlWebpackPlugin.options就是一个对象,对应的就是new htmlWebpackPlugin({})中的大括号中的内容;
 	
 */	
 	  })
 	  
 	  ]
 	  
      
 }
