

var htmlWebpackPlugin=require('html-webpack-plugin');  //这里是引入插件，并赋值给一个变量
 
   module.exports = {
 	entry:'./main.js',
 	output:{
   		path:__dirname + '/dist',
        
 		filename:'build.js'
 	},
 	  plugins: [
 	  new htmlWebpackPlugin()   //在plugins中实例化插件，注意这里使用new实例化的时候，名字需要和顶部引入插件时候的变量名相同
 	  
 	  ]
 	  
// 	  
// 	  这样配置完成之后,会默认生成一个index.html文件,并将打包后的js文件引入到页面中,此时index.html所处的目录是output中path设置的目录,和打包后的js文件在同一个目录,有其他配置办法将html文件放到指定位置;
 }
