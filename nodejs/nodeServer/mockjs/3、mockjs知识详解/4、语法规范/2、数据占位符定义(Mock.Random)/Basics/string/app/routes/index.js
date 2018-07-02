var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
//		        string()方法返回随机的字符串,并可以设置返回指定的随机字符串
//                string( length )  返回制定长度的字符串
         //     例如:
        //            string:'@string(12)'  //返回长度为12的字符串
	    
	      //            string( pool,length ) //表示返回从地址池中 返回指定长度的随机字符串，例如：
	      //      例如: 
	      //              string:'@string("upper",5)'  //返回五个随机大写字母
	                 
	      //           string(min,max ) 返回长度为min到max之间的随机字符串
	      //           例如:
	      //             string:'@string("abcdefg",2,5)' //只会返回abcdefg中的字符，且长度为2到5之间的随机数
	                   //返回中文:
	                       string:'@string("赵钱孙李的洒水车上擦拭",2,5)'  
	                       
	                       
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
