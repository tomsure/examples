var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
 
    var templet={
    	"aa":"11"
    }
router.get('/mockjs', function(req, res, next) {
	var callback=req.query.callback;
//	     console.log(callback)
	var Mock = require('mockjs');  
//	    Mock.step({
//	    	timeout:'200-600'
//	    })

        Mock.setup({timeout :4000 });
	var data = Mock.mock(templet); 
	
    var ret= JSON.stringify(data, null, 4)
//  console.log(ret)
    
    res.send(ret);
});
module.exports = router;
