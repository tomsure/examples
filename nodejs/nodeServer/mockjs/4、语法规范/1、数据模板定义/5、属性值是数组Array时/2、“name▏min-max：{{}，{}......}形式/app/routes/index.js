var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockjs', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
//	   'list|2-4':[{'a':1},{'b':2},{'c':3},{'d':4},{'e':5}]
	    'list|1-3':[1,2,3,4,5]
//	      当value的值是数组是时候, 'name|min-max':[{},{}..]表示随机产生min-max范围内随机个数作为次数输出组元素,此处需要注意，由于数组中的每个元素是一个数组元素，数组中的所有数组元素也可能是一整个数组元素，所以，这种情况下，产生的随机数可能会有这两种情况，例如：
//           数组[1,2,3,4,5]中, 1,2,3,4,5是数组中的每个数组元素,但是在这里1,2,3,4,5也可以是[1,2,3,4,5]这个数组的一个元素，所以会于两种情况产生数据
    
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   