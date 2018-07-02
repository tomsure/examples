var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var r=Mock.Random
	var data = Mock.mock(
//		{
//		   dataImage()方法生成一对base64编码格式的图像地址
//	     image1:"@dataImage('200x200')"
            r.dataImage('200x100', 'Hello Mock.js!')
            
//          这个知识点报错,暂未查明原因
//	}
		);
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
