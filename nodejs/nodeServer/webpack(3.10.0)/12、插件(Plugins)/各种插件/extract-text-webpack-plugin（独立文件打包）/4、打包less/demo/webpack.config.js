

var ExtractTextPlugin=require('extract-text-webpack-plugin')
   //加载插件
      
module.exports={
	entry:'./js/main.js',
	output:{
		path:__dirname + '/build',
		filename:'build.js'
//		publicPath:'buils'
	},
	
	module:{
		rules:[{
			test:/\.less$/,
		    
			use:ExtractTextPlugin.extract({  //设置加载器，这里和不使用插件有区别
				fallback:"style-loader",
				
				use:['css-loader','less-loader'] //必须加载的loader
				
			}) 
			
		}]
	  },
	  plugins:[ //设置插件选项
	      new ExtractTextPlugin('style.css')  ,
	      new ExtractTextPlugin('style.less')  
	      //实例化引入插件返回的对象，用于设置打包后的文件名。可以打包成less也可以打包成css文件
	      //两次实例化可以生成两个文件
	  
	  ]
	
}
   
//打包less 步骤:
//  1,安装extract-text-webpack-plugin插件,
//  2,安装less,
//  3,安装less-loader,
//  4,配置:
       