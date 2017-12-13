var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|5.2-5': 0
	    
//	    'name|count.dmin-dmax':value 表示的是小数点前面是一个固定的数值,小数点后面的位数是一个取值范围,例如:
//	              'list|5.2-5': 0 可能产生的数据是:
//	                       'list':5.2313,  //小数点后4位数字
//	                       'list':5,12,    //小数点后面2位数字
//	                       'list':5,21353,  //小数点后面5位。。
//	                       'list':5.2134    //小数点后面4位。。
//	                        ....
//	                        从上面可以看出小数点前面的5就是不动的count,小数点后面的数值的位数在2-5之间
	    

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   