var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '1111' });
});



router.get('/mockapi', function(req, res, next) {
	var Mock = require('mockjs');
	var data = Mock.mock({
	    //dataBoolean:'@BOOLEAN'   //返回布尔值
	    
//	       布尔值: boolean() 或 boolean(min,max,current)
 /*               如果使用boolean()不加参数,则返回true或者false的概率为50%;
                 这里的min指的是最小值,max指的是最大值,current则只的是预测的true或者false,
          current的概率为 min/(min+max)
             例如:
             boolean(2,3,true) ,则 返回true的概率为 2/(2+3)
          current相反的值的概率为 max/(min+max)
             例如:
             boolean(2,3,true),则false的概率为 3/(2+3)  */
	      dataBoolean:"@boolean(3,4,false)"
	}); 
    var ret= JSON.stringify(data, null, 4)
    console.log(ret)
    res.send(ret);
});


module.exports = router;
