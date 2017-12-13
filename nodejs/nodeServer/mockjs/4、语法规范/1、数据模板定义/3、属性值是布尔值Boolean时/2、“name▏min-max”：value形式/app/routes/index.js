var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: '1111' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-8': true
//	    'name|min-max':value表示随机产生一个布尔值,value值的产生的概率是min/(min+max) 而相反值的概率是 max(min+max),例如:
//	        'list|1-8': true 此时产生的value为true的概率就是  1/(1+8),此时产生false的概率是 8(1+8);
//	         'list|1-8': false此时产生的value为true的概率就是  1/(1+8),此时产生true的概率是 8(1+8);
//	           这样就可以推论相反的值比当前值产生的概率要大
	    
})
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});

   
module.exports = router;
   