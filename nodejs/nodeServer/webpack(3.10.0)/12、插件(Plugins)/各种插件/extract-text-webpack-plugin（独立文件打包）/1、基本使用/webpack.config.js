

var ExtractTextPlugin=require('extract-text-webpack-plugin')
   //加载插件
 
module.exports={
	entry:'./js/main.js',
	output:{
		path:__dirname + '/build',
		filename:'build.js'
	},
	
	module:{
		rules:[{
			test:/\.css$/,
		    
			use:ExtractTextPlugin.extract({  //设置加载器，这里和不使用插件有区别
				fallback:"style-loader", 
				use:'css-loader' //必须加载的加载器
				
			}) 
			/*上面这一步也可以使用数组的方式，直接写成：
			     use:ExtractTextPlugin.extract(['style-loader','css-loader'])
			     
			*/     
			
		}]
	  },
	  plugins:[ //设置插件选项
	      new ExtractTextPlugin('stylefile.css')  
	      //实例化引入插件返回的对象，用于设置打包后的css文件名
	  
	  ],
	 
}
   /*     extract-text-webpack-plugin插件打包css步骤:
         1.在module选项中,将rules中的配置项中的use的值设为加载extract-text-webpack-plugin插件时候的变量的extract()方法,并在里面进行配置:
            use:ExtractTextPlugin.extract({   //配置loader，这里的ExtractTextPlugin就是引入插件设置的变量名
	         	
	         })
          
          2,在use:ExtractTextPlugin.extract({ })中配置loader:
          
                        可以使用对象方式：
                           use:ExtractTextPlugin.extract({  //设置加载器，这里和不使用插件有区别
									                  fallback:"style-loader", 
									                  use:'css-loader' //必须加载的加载器
                                                        })  
                                                        
                          也可以使用数组方式：
                            use:ExtractTextPlugin.extract(['style-loader','css-loader'])   //注意先后顺序     
                            
           3，添加插件：在plugins选项中使用new实例化一下加载插件时候的方法，方法中写的参数就是打包后生成的css文件名                 


   */