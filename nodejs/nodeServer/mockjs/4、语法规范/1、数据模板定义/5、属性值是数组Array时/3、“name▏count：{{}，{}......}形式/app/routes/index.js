var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	   	   'list|2':[{'a':1},{'b':2},{'c':3},{'d':4},{'e':5}]
//	         这种事返回固定数量的数组元素,与上面粒子相同,可能将数组中所有元素作为一个数组元素 进行返回   
  
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   