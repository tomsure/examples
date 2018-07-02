var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	   var r=Mock.Random;  //声明random
	var data = Mock.mock(
//		{
//	          GUID1:'@GUID'
            r.guid()    //使用random的方法
//           guid()方法表示随机生成一个GUID号码,格式例如:Da3cAfEf-45cC-bfd7-262f-14C7792b1bD1
//   }
          
		);
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
