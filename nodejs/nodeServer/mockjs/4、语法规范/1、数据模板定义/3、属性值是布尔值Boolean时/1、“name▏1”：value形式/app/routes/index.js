var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1':true
//	      当value的值是布尔值时候. 'name|1':"value"值的是当value的值为true或者false的概率都是1/2例如：
//               'list|1':true 产生的值,有50%的概率是true有50%的概率是false

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   