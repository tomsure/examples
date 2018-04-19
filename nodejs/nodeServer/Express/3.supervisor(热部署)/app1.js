


var Mock=require('mockjs');
var data=Mock.mock({
	'list|1-10':[{
		'id|+1':1
	}]
})

//console.log(JSON.stringify(data,null,4))

   function aa(){
   	console.log(JSON.stringify(data,null,4))
   }

   setInterval(aa,1000)