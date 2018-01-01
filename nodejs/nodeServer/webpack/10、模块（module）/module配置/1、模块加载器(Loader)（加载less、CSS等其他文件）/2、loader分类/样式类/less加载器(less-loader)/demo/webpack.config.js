module.exports={
	entry:'./js/main.js',
	output:{
		path:__dirname + '/dist',
		filename:'build.js'
	},
	module:{
		rules:[
		
		    {
		    	test:/\.less$/,   //设置后缀正则
		    	loader:'style-loader!css-loader!less-loader'
		    	
//		    	  设置loader,这里必须设置三个loader才可以
		    }
		]
	}
}
