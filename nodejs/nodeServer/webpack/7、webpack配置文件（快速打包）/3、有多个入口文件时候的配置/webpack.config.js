module.exports={
	entry:{
		person1:'./main1.js',
		person2:'./main2.js'
		//两个入口文件
		
		
		 
	},
//	两个入口文件也可以使用数组的方式,例如:
//	  entry:['./main1.js','./main2.js'],
      
//    这种情况下会将两个入口文件打包为一个文件

//还可以使用混合的方式,就是将数组放在json对象中
	output:{
		path:'E:\\gitHub\\examples\\nodejs\\nodeServer\\webpack\\7、webpack配置文件（快速打包）\\3、有多个入口文件时候的配置/dist',
		filename:'[name].build.js' //打包成以entry中key开头的文件名
		
//		由于有两个入口文件,所以打包后也要产生两个不同的文件,所以名称也不相同,用法就是使用一个[name]加在打包文件名字前面,打包后的文件就会以entry中不同的key值开头
	}
	
}
