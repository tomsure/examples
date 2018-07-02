module.exports={
	entry:'./mian.js',
	output:{
		path:__dirname, //这里要绝对路径
		filename:'build.js'
	},
	module:{
		rules:[
				   {  //设置模块加载器 ,使用的是rules,而不是1.x以前使用的loaders选项
					test:/\.css$/,  //正则表达式
					use:[ 'style-loader' ,'css-loader'
					    //使用的加载器，放在数组里面，每个加载器使用json对象的格式
					    ]
					},
					{
						//其他loader
					}
		      ]

	}

}
//    这个版本的webpack打包时候loaders配置步骤如下:
//       1,在module选项最外层设置rules选项value值是一个数组：
//       2,rules 的value 这个数组中,用于配置多个不同的loader,每种loder都使用json对象个格式,每个json对象 内部的内容表示要配置的一个loader,这个内部又有多个选项:
//         test:是一个正则,用于匹配;
//         use:如果里面有多个json对象内容,如有多条内容则是一个数组,用于设置加载器需要加载的loader名称:
//            例如上面的例子: 这里加载样式,所以需要使用style-loader和css-loader
//         use 选项内部也是使用json格式,具体格式是:{loader:"loader名称"}
//

//  1.x版本的webpack配置loader时候这里的配置 有所区别,需要注意,可以查看相关版本文档比较