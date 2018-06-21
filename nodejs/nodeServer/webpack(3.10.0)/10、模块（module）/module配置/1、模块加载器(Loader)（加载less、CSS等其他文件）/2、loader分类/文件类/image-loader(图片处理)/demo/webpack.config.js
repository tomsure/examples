    var htmlwebpackplugin=require('html-webpack-plugin')
module.exports={
	
	entry:'./main.js',
	output:{
		path:__dirname + '/dist',
		filename:'build.js',
		publicPath:'../'  //设置相对于打包后生成的html文件的路径
	},
	module:{
		  rules: [
		       {
			      test: /\.(png|jpg|gif|svg)$/i,           
			use: [
			    {
					loader: 'url-loader',                     
					options: {
					name: '[name]-[hash:5].[ext]',
					limit: 40                                       
			    }
			  },
			'image-webpack-loader'                                  
			]                       
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

/*
    
        image-webpack-loader插件用于压缩图片,将引用的图片压缩后引入打包的页面,操作步骤如下:
            1,安装插件:
               cnpm install --save-dev image-webpack-loader 注意:npm命令安装的插件会报错,无法打包,必须使用nnpm安装
            2,配置:
               1,rules选项里第一步设置test;
               2,在test下面设置use选项,在里面先设置url-loader,然后再设置image-webpack-loader;
               3,注意:由于loader是从下往上加载的,所以必须先设置url-loader,再设置image-webpack-loader

*/