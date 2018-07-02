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
     	}
//   	
     	
     }

 //Mock.mock(rurl,templet)方法第一个参数表示要拦截的url,这个url可以是完整的url字符串，也可以是url字符串正则表达式，例如：
router.get('/mockapi', function(req, res, next) {
	var callback=req.query.callback;
//	     console.log(callback)
	var Mock = require('mockjs');  
	var data = Mock.mock(/\.json/,templet); //
	
    var ret= JSON.stringify(data, null, 4)
//  console.log(ret)
      ret=callback+'('+ret+')'
    res.send(ret);
});


module.exports = router;
