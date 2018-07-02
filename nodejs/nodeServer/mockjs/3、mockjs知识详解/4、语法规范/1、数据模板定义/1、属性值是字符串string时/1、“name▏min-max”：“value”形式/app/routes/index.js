var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-10': "a"
//   "name|min-max:value"这种形式表示json数据中name的值是固定的,是一个json的kay的值,例如这里的list就是名称,min-max表示value的值重复的随机次数的范围，例如，这里的1-10,就指的是'list|1-10'后面的value值每次出现的随机次数从1-10随机产生，例如：
//                  'list':'aa',
//                  'list':'aaa'
//                  'list':'aaaaaaaa'
//                 value的值是由a出现1-10随机数次组成
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   