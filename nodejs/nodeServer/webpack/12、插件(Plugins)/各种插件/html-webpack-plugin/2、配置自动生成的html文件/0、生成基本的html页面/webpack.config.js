

var htmlWebpackPlugin=require('html-webpack-plugin');  //这里是引入插件，并赋值给一个变量
 
   module.exports = {
 	entry:'./main.js',
 	output:{
   		path:__dirname + '/dist',
        
 		filename:'build.js'
 	},
 	  plugins: [
 	  new htmlWebpackPlugin()
 	  
 	  ]
 	  

 }
/*         使用html-webpack-plugin插件生成基本html页面步骤:
           1,安装html-webpack-plugin插件;
           2,在配置文件顶部引入插件
           3,配置插件:在plugins选项中实例化引入插件设置的变量名,
           4,备注:输入webpack打包,打包后产生的文件默认放在path设置的目录下,并且文件名叫index.html
           
*/