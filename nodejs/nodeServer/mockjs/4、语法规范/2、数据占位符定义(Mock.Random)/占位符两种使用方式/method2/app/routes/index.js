var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/mockjs', function(req, res, next) {
	 var Mock = require("mockjs")
	     var data=Mock.mock({
	     	   email:'@email' ,   //在数据模板中使用的时候，kay的值不需要引号，引号中就是使用的占位符的方法，只是去掉了括号而已
	     	   booleanData:"@BOOLEAN"  //在数据模板中还可以大写为了更快的渲染才这么做
	     })
	     
	    
	    
//	    如果方法没有省略括号,则还可以添加参数
	     
  res.send(data);
});

module.exports = router;
