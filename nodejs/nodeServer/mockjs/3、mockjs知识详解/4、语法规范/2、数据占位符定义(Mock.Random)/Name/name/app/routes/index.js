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
		{
	 //   name:'@name(middle)'  //name()方法生成一个随机的英文姓名 ,middle参数表示是否姓名中的中间名，值为布尔值,不填写则不生成中间名
	    name:"@name('true')"
	  //     r.name(true)
	}
		);
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
