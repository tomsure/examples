var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|2':{
	    	'a':1,
	    	 'b':2,
	    	 'c':3,
	    	 'd':4
	    }
//	       'name|count':value,表示抽取固定数量的随机的对象属性

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   