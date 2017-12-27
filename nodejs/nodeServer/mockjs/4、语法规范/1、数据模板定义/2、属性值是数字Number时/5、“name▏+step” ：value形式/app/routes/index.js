var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
//	 "name|+step":value 这种形式表示模拟数组中递增的数字,意识是说模拟的value值需要是在一个随机的数组中的数组元素, "name|+step"中的step就是递增的数值,也就是每次增加多少，value就是递增的数字的基数，也就是模拟的数字从这个数字开始增加，例如这里：
	var data = Mock.mock({
	    'list|3-6':[{
	    	"ss":'aa',
	    	"number|+10":100
	    }]
	    
	    //"number|+10":100 ，表示以100为基数，模拟数数字每次+10
	    //由于需要有多个数组元素才会出现递增数字，所以模拟的数组也需要有多个数组元素，也就是这里设置了'list|3-6'，表示生成3-6个数组元素

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   