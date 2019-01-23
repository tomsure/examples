
var express = require('express');


var templet={   //定义模板数据，注意，里面的json数据必须使用双引号
     	"name":"罗伟嘉",
     	"string|1-10":"%",
     	"info":{
     		"name":"loweichaia",
     		"sex":"girl",
     		"age":"26"
     	},
     	"function":function(){
     		return this.name
     	},
     	"boy":"汤旭111"
//

     }
var app = express();
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/mockapi', function(req, res) {
    var Mock = require('mockjs');
	var data = Mock.mock(templet);   //Mock.mock(templet)用于根据数据模板生成数据
    var ret= JSON.stringify(data, null, 4)  //处理
    res.send(ret);
});
//app.listen(7000);
//console.log('Listening on port 7000...');
module.exports = app;




//这里是使用中间件的方式在服务端设置允许跨域



