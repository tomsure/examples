var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
//	              range()方法返回一个整型数组
              //  range( stop )  //返回一个指定长度的数组，从0开始,所以不包括设置的这个数，例如：
              //range:"@range(10)"  //返回[0,1,2,3,4,5,6,7,8,9]
              
							//	range( start, stop )  //返回指定起始值的数组,包括第一位，不包括最后一位
              //   range:"@range(10,20)"  //返回[10,11,12,13,14,15,16,17,18,19]
              
							//	range( start, stop, step )  //用于设置指定步长值的数组，也就是每个数字递增几个，这里的step就是步长值，例如：
							     range:"@range( 2,20,2 )" //返回的数组为  [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
							       
							
									}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
