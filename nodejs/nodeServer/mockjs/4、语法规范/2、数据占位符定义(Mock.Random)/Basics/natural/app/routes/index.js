var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	   /* natural:'@natural()'  //natural方法返回一个随机***大于等于***0的整数
	    natural:'@natural(min)'  //返回一个最小值为min的整数值,
	    natural:'@natural(min,max)'   //返回一个min-max之间的整数值  */
	   
	        natural:"@natural(10,100)"  //返回一个最小为10，最大为100的数值
	      
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
