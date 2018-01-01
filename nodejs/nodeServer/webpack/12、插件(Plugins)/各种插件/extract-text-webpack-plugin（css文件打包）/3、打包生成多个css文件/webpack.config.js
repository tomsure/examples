

    var ExtractTextPlugin=require('extract-text-webpack-plugin')
   //加载插件
 
   
    
module.exports={
	entry:'./js/main.js',
	output:{
		path: __dirname + '/build',
		filename:'build.js'
	},
	module:{
		rules:[
	         {
	         	test:/\.css$/,
	         use:ExtractTextPlugin.extract({   //配置loader
	         	fallback:'style-loader',   
	         	use:'css-loader'
	         })
		      }
		      ]

           },
            plugins:[
	                        new ExtractTextPlugin('css/style1.css'),
                            new ExtractTextPlugin('css1/style2.css')  
    
       //    加载插件后进行多次实例化就可以生成多个CSS文件
	               ]
	
	 
}
