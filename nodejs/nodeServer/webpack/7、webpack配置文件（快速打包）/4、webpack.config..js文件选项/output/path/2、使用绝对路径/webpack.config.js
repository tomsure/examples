

module.exports={
	entry:'./main.js',
	output:{
		path:'E:\\gitHub\\examples\\nodejs\\nodeServer\\webpack\\7、webpack配置文件（快速打包）\\webpack.config..js文件选项\\output\\path\\使用绝对路径',
/*		
		1,如果需要讲打包文件放在webpack.config.js 当前目录以外的目录,则需要使用绝对路径
		2,如果是在linux环境下,写入linux的绝对路径即可;
		3,如果是在windows环境下,得到输出的打包文件的路径后需要将路径中的"\"改成 "\\"
		
*/		
		
		filename:'build.js'
	}
	   
}
