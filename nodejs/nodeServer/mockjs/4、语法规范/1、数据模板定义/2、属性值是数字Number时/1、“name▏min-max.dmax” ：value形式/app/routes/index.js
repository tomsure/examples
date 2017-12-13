var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-3.4': 1,
//         "name|min-max.dmax":value指的是value的值是小数,且min-max是小数点前面的数值范围,例如1-5.dmax,则小数点前面的数字可能是1,可能是2也可能是5...
//          小数点后面的dmax指的是小数点位数的随机数,例如:
//                  'list|1-3.4': 1,可能产生的数据为:
//                     'list':1.2323,
//                     'list':3.2123,
//                      'list':2.1254
//                     ....
//                      这些数据的共同点是所有的value的值的小数点 后面的值都是4位,这就是.dmax的作用
//                      
//                  此时value的值设置的时候必须设为数字类型,不论是多少,如果输入的不是数字,则不会产生理想数据    
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   