module.exports={
	entry:'./main.js',  /*这里配置入口文件的路径，如果有多个入口文件，则使用json方式，例如：
	 entry:{
	 	'入口文件路径1',
	 	'入口文件路径2'
	 	'...'
	 }
	 */
	output:{
//		path:__dirname,  //这里用于定义打包后文件所处的路径，__dirname是nodejs中规定的一种路径方式，他指的是当前这个webpack.config.js 文件所处的当前目录，也就是说如果这样设置的话打包后的文件就会放到webpack.config.js的相同目录，当然也可以设置其他路径，只需按照相对webpack.config.js来写路径即可，例如：
       path:'E:\\gitHub/examples\\nodejs\\nodeServer\\webpack\\7、webpack配置文件（快速打包）\\2、基本使用',
       
       //注意如果是在Windows环境下打包，windows路径需要将“\”改成“\\”
		
		filename:'build3.js'   //定义打包后的文件名称，也就是引入到页面的那个js文件名称
	}
}
