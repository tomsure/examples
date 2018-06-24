module.exports={
	entry:'./main.js',
	output:{
		path:__dirname,
		filename:'build.js'
	},
	modules:{
		loaders: [
            { test: /\.jade$/, loader: "jade" },
            // => "jade" loader is used for ".jade" files

            { test: /\.css$/, loader: "style!css" },
            // => "style" and "css" loader is used for ".css" files
            // Alternative syntax:
            { test: /\.css$/, loaders: ["style", "css"] },
        ]
	}
}
//从上面例子可以看出1.x 的webpack 加载器(loaders)的配置方式和2.0以后的webpack loaders 配置方法有所不同:
//   这里modules 的最外层使用的是loaders选项作为一个数据进行配置,而2.0以后的配置使用的是rules进行配置loaders
//    内部的配置也有所不同,可以查看官方文档中两中webpack loaders的配置差异

 

  //  在1.x版本的webpack中加载css需要在使用css文件的js里执行nodejs的require()方法中加载css-loader和style-loader以及css 文件,例如:
//   require('style-loader!css-loader!./stylcss')
     
//  2.0以后则不需要