var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	
	    var r=Mock.Random;
	var data = Mock.mock(
	       r.id()    //id()方法生成随机的18位身份证号
	       //这里使用的是直接调用方法的方式编写占位符生成数据
	       
	); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
