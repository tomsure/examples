    var webpack=require('webpack')
    var path=require('path')
module.exports={
	entry:'./main.js',
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:'./build.js'
	},
	module:{
		loaders:[
		   {test:/\.vue$/,loader:"vue-loader"},
		   {test:/\.js$/,loader:'babel-loader',exclude:/node_modules/}
        
//		   设置babel-loader,并设置过滤项,exclude选项用于设置过滤项
		]
	},

	
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
//              postcss: [
//                  require('')//调用autoprefixer插件
//              ]    
                  	"babel-loader":{
						presets:['es2015'],
						plugins:['transform-runtime']
					}
            }
        })      
    ]
}
