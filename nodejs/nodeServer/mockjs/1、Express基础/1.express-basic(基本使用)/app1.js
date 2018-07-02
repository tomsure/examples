var express = require('express');  //引入eapress框架模块
var app = express();  //创建express应用
   
app.get('/', function (req, res) {
  res.send('sofia');
});
  
//  app.get()方法表示收到get请求后页面打开的位置,后面的函数时收到请求后执行的函数,两个参数,req是客户端请求的数据对象,res是返回到客户端的数据对象
  
//  app.get()方法叫做中间件
  
  
var server = app.listen(5000, function () {  //app.listen()方法用于监听请求，两个参数，第一个是数字，是客户端请求的端口 第二个是收到请求后执行的函数
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});