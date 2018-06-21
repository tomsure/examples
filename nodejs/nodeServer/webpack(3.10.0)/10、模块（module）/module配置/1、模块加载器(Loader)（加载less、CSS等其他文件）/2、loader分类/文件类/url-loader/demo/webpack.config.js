    var htmlwebpackplugin=require('html-webpack-plugin')
module.exports={
	
	entry:'./main.js',
	output:{
		path:__dirname + '/dist',
		filename:'build.js',
		publicPath:'../'  //设置相对于打包后生成的html文件的路径
	},
	module:{
		rules:[
		     {
		     	test:/\.css$/,
		     	loader:'style-loader!css-loader'
		     },
		     
		     {
		     	test:/\.(png|jpg|gif|svg)$/i,   //设置图片文件正则
		     	loader:'url-loader', //设置url-loader
		     	options:{  //这里的options也可以写为query,新版本已废弃
		     		limit:40000,  //设置使用url-loader打包的文件最大字节，超过这个值就是用file-loader
		     		name:'[hash:5]-[name].[ext]'  //设置当文件超出上面的limit的时候，使用file-loader打包成图片文件的时候的文件名
		     		
		     	}
		     }
		     ]
		     
	   },
	   plugins:[
	     
		         new htmlwebpackplugin({
		         	
		        	template:'./template/index.html',
		        	filename:'html/demo.html'  //这里的路径需要和public路径相对应
		        
		         })
		     ]
}

       

/*  使用url-loader打包图片步骤:
      1,安装url-loader;
      2,配置：设置test,loader名称和options，其中options中用于设置limit选项，这个选项用于设置url-loader打包的文件最大值，当文件小于这个值的时候，使用url-loader打包，如果是图片文件，则会打包成base64格式的编码，如果超过这个值，则会使用file-loader打包；
       3,注意,目前学到这里,使用url-loader的时候,前面不能设置file-loader,否则无法成功打包
*/       