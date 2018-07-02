var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'express' });
});

router.get('/mockapi', function(req, res, next) {
	
	var Mock = require('mockjs');
	  var random=Mock.Random //声明Mock.Random，将它设置为一个变量，后面好调用
	var data = Mock.mock(random.email());  //相当于var data = Mock.mock(Mock.Random.email());

	   res.send(data)  
	   	
//	    由于mockjs 已经把Mock.Random设置为了window对象作为window的属性,所以也就是一个全局变量,所以可以不必每次都写,可以使用一个@符号代替,但是需要使用引号,例如:
//	       var data1=Mock.mock('@email()')  //这里的括号也可以省略，还可以将方法名大写如 "@EMAIL"
//	        res.send(data1)
        
        
        

});
   
module.exports = router;
