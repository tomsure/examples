module.exports={
	entry:'./js/main.js',
	output:{
		path:__dirname + '/build', //这里要绝对路径
		filename:'build.js'
	},
	module:{
		rules:[   //定义rules，他值是一个数组
		   {
			test:/\.css$/,  //正则表达式
			use:[
			   {loader:'style-loader' },
			   { loader:'css-loader' }
			    //使用的加载器，放在数组里面，每个加载器使用json对象的格式
			    ]
           },
           
           {
//         	这里定义其他loader
           }
		      ]
		
	}
	   
}

/*
     使用webpack.config.js 使用loader的步骤如下:
        1,在webpack.config.js文件对象中和output选项后面新增一个module选项,也是一个对象（这里面可以配置很多东西,在这里只是学习使用loader)
        2,在module里面设置一个rules属性选项,值是一个数组所以使用[];
        3,rules数组中的每个元素是一个json格式的对象,每个这样的对象就代表一个loader,在这个数组元素也就是这个对象中,设置几个选项:
          a,test://  ,这是一个正则表达式,用于定义需要加载模块文件的后缀名,例如这里加载css,所以里面写:test:/\.css$/, 
          b,use:[] 这个选项的值也是一个数组,用于定义加载器,里面可以以对象的形式写加载器名称，也可以直接写，例如：
              
                  use:['css-loader','style-loader'] 
                        或者  use:[{loader:'css-loader'}{loader:'style-loader'}]
          
          ;
*/
        
