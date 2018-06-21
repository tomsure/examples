  
  
  
  module.exports={
	  entry:'./main.js',
	  output:{
		  path:__dirname ,
		  //		path:__dirname,  //这里用于定义打包后文件所处的路径，__dirname是nodejs中规定的一种路径方式，他指的是当前这个webpack.config.js 文件所处的当前目录，也就是说如果这样设置的话打包后的文件就会放到webpack.config.js的相同目录
		  filename:'build1.js'
	  }
  }