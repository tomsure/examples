var express = require('express');
var app=express()
var  multiparty= require('connect-multiparty')   //引入模块
var multipartMiddleware = multiparty();            //
var Mock=require('mockjs')
var template={
     	"name":"罗伟嘉",
         "function":function(){
     		return this.name
     	},
     	"boy":"汤旭"
        }
//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.post('/mockapi',multipartMiddleware,function(req,res,next){ //处理post请求
   var data=Mock.mock(template)
    console.log(res)
       res.json(data)  //向前端返回数据

})
app.listen(7000);
console.log('Listening on port 7000...');
module.exports = app;





