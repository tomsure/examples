var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});
var templet={   //定义模板数据，注意，里面的json数据必须使用双引号
     	"name":"罗伟嘉",
     	"string|1-10":"%",
     	"myLove":{
     		"name":"loweichaia",
     		"sex":"girl",
     		"age":"26"
     	},
     	"function":function(){
     		return this.name
     	},
     	"boy":"汤旭"
//   	
     	
     }

router.get('/mockapi', function(req, res, next) {
	var callback=req.query.callback;  //设置callback，这一步暂不清楚，需继续了解
	     console.log(callback)
	var Mock = require('mockjs');  
	var data = Mock.mock(templet);   //Mock.mock(templet)用于根据数据模板生成数据
    var ret= JSON.stringify(data, null, 4)  //处理数据格式
//  console.log(ret)
      ret=callback+'('+ret+')'  //jsonP的原理就是使用一个js方法的形式，将data数据放在括号中返回到前端，所以这里需要使用一对字符串拼接的括号，这里理解还不是很清楚
      
      
    res.send(ret); //这里就是处理过后给前台的响应数据
});


module.exports = router;
