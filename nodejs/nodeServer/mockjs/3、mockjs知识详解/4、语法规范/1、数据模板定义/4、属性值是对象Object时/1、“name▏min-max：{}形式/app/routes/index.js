var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-4':{
	    	'a':1,
	    	 'b':2,
	    	 'c':3,
	    	 'd':4
	    }
//	       'nsme|min-max':value表示导当value为对象是速随机抽取对象的属性的个数,范围是min-max的数值,例如:
//	          'list|1-4':{
//	    	'a':1,
//	    	 'b':2,
//	    	 'c':3,
//	    	 'd':4
//	    }
//	            这个对象,则可能产生的数据是:
//	               'list':{'a':1,'b':2,'c':3,'d':4}
//	                'list':{'a':1}
//	                'list':{'a':1,'b':2}
//	                'list':{'a':1,'b':2,'c':3}
//	                ...
//	                
	                
	                

	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   