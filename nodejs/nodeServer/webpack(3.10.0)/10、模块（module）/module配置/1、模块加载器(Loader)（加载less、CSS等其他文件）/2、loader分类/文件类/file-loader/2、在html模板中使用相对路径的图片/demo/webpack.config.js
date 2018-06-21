    var htmlwebpackplugin=require('html-webpack-plugin')
module.exports={
	
	entry:'./main.js',
	output:{
		path:__dirname + '/dist',
		filename:'build.js',
		publicPath:'../'  //设置相对于打包后生成的html文件的路径
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
		     
	   },
	   plugins:[
	     
		         new htmlwebpackplugin({
		         	
		        	template:'./template/index.html',
		        	filename:'html/demo.html'  //这里的路径需要和public路径相对应
		        
		         })
		     ]
}
//   在使用html插件的时候,如果模板文件中使用img图片标签,如果要在打包后的文件中正常显示,需要做如下配置:
//     1,在模板文件img标签的src属性需要做如下配置:
//           < img src=${ require('../img/1.jpg')}/>   require()括号中写图片文件相对向前模板文件的路径
//     2,在output中配置publicPath,这里的设置的路径需要和最后plugins中实例化html插件的时候配置生成放入html文件的路径相对应,例如上面的例子
          
       
