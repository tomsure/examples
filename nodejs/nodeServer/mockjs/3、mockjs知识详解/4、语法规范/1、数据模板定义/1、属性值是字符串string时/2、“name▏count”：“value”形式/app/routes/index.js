var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|5': "a"
//   "name|cpunt:value"这种形式表示name的值是固定的，"name|count:value"这里的count只的是设置的vlaue的值每次重复的固定个数，例如这里：
//         上面'list|5': "a",表示每次产生的json数据的name都是list,value是a出现5次形成的value,例如:
//                       每次运行后产生的数据:
//                           'list':'aaaaa',第一次运行
//                           'list':'aaaaa',第二次运行
//                           'list':'aaaaa',第三次运行
//                            ...
//                          这样每次运行,产生的数据都是固定的5次a组成的value
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   