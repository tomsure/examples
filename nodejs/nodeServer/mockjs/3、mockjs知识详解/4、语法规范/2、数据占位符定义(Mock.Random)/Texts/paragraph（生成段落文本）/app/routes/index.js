var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	    var r=Mock.Random
	var data = Mock.mock(
//	        paragraph()方法随生成一段文本
//           r.paragraph(),
             r.paragraph( 4)  //length用于设置文本中的句子的个数，3-7之间产生
//         r.paragraph( min, max ),   //min可选。指示文本中句子的最小个数。默认值为 3。max可选。指示文本中句子的最大个数。默认值为 7。
	); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
