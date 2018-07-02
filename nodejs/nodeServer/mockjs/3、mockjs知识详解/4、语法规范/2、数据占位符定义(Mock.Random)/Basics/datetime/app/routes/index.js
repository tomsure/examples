var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    //datetime:'@datetime()'  //datetime()方法用于返回指定格式的时间数据
/*	      参数说明:
	          Mock.mock('@time("A HH:mm:ss")')   返回上午的时分秒  数据格式为  "AM 12:23:12"
            Mock.mock('@time("a HH:mm:ss")')   返回下午的时分秒  数据格式为  "PM 12:23:12"
            Mock.mock('@time("HH:mm:ss")')     返回24小时制的时分秒             数据格式为  "01:23:12"
            Mock.mock('@time("H:m:s")')         返回12小时制的时分秒         数据格式为     "1:23:12"
            
Mock.mock('@datetime("HH H hh h mm m ss s SS S A a T")')  可以返回里面所有的数据格式，T代表毫秒  */
            
          dateTime:'@time("A HH:mm:ss:T")' //返回时分秒毫秒
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
