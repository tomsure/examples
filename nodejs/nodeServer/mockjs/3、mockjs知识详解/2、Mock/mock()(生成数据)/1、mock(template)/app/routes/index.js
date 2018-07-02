var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});
var templet={
     	'name':'罗伟嘉',
     	'string|1-10':'%',
     	'lovelyGirl':{
     		'name':'loweichaia',
     		'sex':'girl',
     		'age':'26'
     	},
     	'function':function(){
     		return this.name
     	}
     	
     	
     }

router.get('/mockapi', function(req, res, next) {
	var callback=req.query.callback;
	console.log(callback)
	var Mock = require('mockjs');  
	var data = Mock.mock({
		      'name':'罗伟嘉',
     	'string|1-10':'%',
     	'lovelyGirl':{
     		'name':'loweichaia',
     		'sex':'girl',
     		'age':'26'
     	},
     	'function':function(){
     		return this.name
     	}
	});   //Mock.mock(templet)用于根据数据模板生成数据
    var ret= JSON.stringify(data, null, 4)
       ret=callback+"("+ret+")";
    console.log(ret)
    res.send(ret);
});


module.exports = router;
