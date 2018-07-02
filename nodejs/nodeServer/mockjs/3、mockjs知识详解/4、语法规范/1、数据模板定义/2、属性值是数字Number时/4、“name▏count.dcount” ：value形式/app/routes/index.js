var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|5.6': 1,
//       'name|count.dcount':value,表示小数点前面是固定的数值且小数点后面是固定的六位的随机数,例如
//                 'list|5.6': 1可能产生的数据是:
//                  'list': 5.123213
//                    'list': 5.213245
//                      'list': 5.434543
//                        'list': 5.431234
//                          'list': 5.432345
//                          ......
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   