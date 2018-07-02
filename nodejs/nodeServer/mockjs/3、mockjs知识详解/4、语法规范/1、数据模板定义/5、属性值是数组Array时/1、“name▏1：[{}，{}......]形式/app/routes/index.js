var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1':[{'a':1},{'b':2},{'c':3}]
//	    'list|1':[1,2,3,4,5]
//	      当value的值是数组是时候, 'name|1':[{},{}..]表示随机产生数组中的其中一个数组元素

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   