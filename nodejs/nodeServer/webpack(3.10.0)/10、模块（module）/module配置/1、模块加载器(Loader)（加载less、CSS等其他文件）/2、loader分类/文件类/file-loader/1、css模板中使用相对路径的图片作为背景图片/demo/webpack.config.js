module.exports={
	
	entry:'./main.js',
	output:{
		path:__dirname + '/dist',
		filename:'build.js',
		publicPath:'dist/'  ///配置public选项，设置静态资源放置的目录
	},
	module:{
		rules:[
		     {
		     	test:/\.css$/,
		     	loader:'style-loader!css-loader'
		     },
		     {
		     	test:/\.(png|jpg|gif|svg)$/i,   //设置图片文件正则
		     	loader:'file-loader',   //设置file-loader
		     	
		     }
		     ]
	}
}
