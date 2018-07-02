var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	   /* integer:'@integer()'  //integer()方法返回一个随机的整数，有可能为负数
	    integer:'@integer(min)'   参数min指的是返回一个最小值为min的整数
	    integer:'@integer(min,max)'  参数min,max指的是返回一个min到max的整数   */
	   
	      integer:"@integer(-100,100)" //返回-100到100之间随机整数
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
