var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-5.2-4':2
//	      'name|min-max.dmin-dmax':value指的是产生小数点前面的值min-max这个范围内且dmin-dmax这个范围为小数点后面位数的值,意思是说min-max.dmin-dmax是一个小数min-max值的是最小值到最大值的一个范围,在这个范围内随机的数值,dmin-dmax也是最小值到最大值的范围,但取它的值作为小数点后面数值的位数,例如:
//	          'list|1-5.2-4':2 ,指的是value的值 小数点前面是1-5的任意整数值,小数点后面是2-4位:
//	                 'list':2.12,
//	                 'list':2.421,
//                   'list':3.21,
//                   'list':4.11,
//                   这些都是可能生成的数据
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   