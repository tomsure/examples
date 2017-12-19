var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    date1:'@date()'   //data方法返回随机的日期，可根据mockjs gitHub上的说明设置参数来获取不同格式的日期随机数据
//	      如果不设置参数则按照默认的格式 yy-mm-dd来返回数据

  
	    
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
