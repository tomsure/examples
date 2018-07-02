var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
		     
	      //  character:"@character()"  //character()方法会生成一个随机字符串，只有一个字符
	   /*   如果参数中使用'lower' 或 'upper'、'number'、'symbol',这个是地址池,是mockjs设置的分类的字符串,如果参数中写了这里的作为参数,则会按照这个参数返回相应的随机字符串,这些地字符串址池内的字符串分为:
	              lower: "abcdefghijklmnopqrstuvwxyz",  小写字母
                upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",  大写字母
                number: "0123456789",                 数字
                symbol: "!@#$%^&*()[]"                特殊字符  */
               
               
               
                 //character:"@character('lower')"  //返回小写字母注意参数使用单引号
                          
                 character:"@character('abcd')"  //返回abcd中的任意一个字符串
                 
//               如果不写参数,则从上面的地址池中返回任意一个字符串
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
