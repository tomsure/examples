  
  
  
  module.exports={
	  entry:'./main.js',
	  output:{
		  path:__dirname + '/dist',
		     //在__dirname后面拼接一个以"/"开头的目录名，就可以将打包文件打包到webpack.config.js当前所在目录的其他子目录中，例如这里就是讲文件打包到当前目录的dist目录中
		  filename:'build1.js'
	  }
  }