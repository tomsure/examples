

var htmlWebpackPlugin=require('html-webpack-plugin');  //这里是引入插件，并赋值给一个变量
 
   module.exports = {
 	entry:{   //三个入口文件
 		main:'./main.js',    //可以作为公共js 
 		a:'./a.js',   //具体页面的js a
 		b:'./b.js'    //具体页面的js b
 	},
 	output:{
   		path:__dirname + '/dist',
        
 		filename:'[name].js',  //文件名
 		
 		publicPath:'https://www.baidu.com'  //设置路径前缀
 		
// 		publicPath用于设置path的路径的前缀,如果没有设置这个选项,只设置了path的话,文件就会在以相对路径引入,加了这个属性后就会把设置的值添加到path设置的url前面,例如在上线的时候设置'http://www.baidu.com'打包后页面的url前面都会增加这个前缀
 	},
 	  plugins: [
   	  new htmlWebpackPlugin({
   	  	   title:'这是a页面',
   	  	   filename:'./demo/a.html',
   	  	   template:'templet/templet-a.html' ,  //设置a页面模板
   	  	   inject:false
   	  }),  
 	  new htmlWebpackPlugin({
 	  	title:'这是b页面',
 	  	template:'templet/templet-b.html' ,  //设置b页面模板
 	  	filename:'./demo/b.html',
 	  	inject:false
 	     
 	  })
      ]
 	  

 }
