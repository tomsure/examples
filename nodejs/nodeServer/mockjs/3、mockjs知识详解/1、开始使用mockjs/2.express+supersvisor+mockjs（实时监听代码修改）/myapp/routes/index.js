var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '222' });
});

router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    'list|1-10': [{
	        'id|+1': 1
	    }]
	});
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.render('index', { title: ret });
});
module.exports = router;
