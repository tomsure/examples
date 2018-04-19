var http = require('http');
var fs = require('fs');
var io = require('socket.io');

var documentRoot = 'D:/work/examples/nodejs/nodeServer/websocket/server（服务端）/socket.io/websocket+mockjs/mockSocket/index.html';

var httpServer = http.createServer(function(req, res) {
	

	
	fs.readFile(documentRoot, function(err, data) {
		
		if (err) {
			res.writeHeader(404, {
				'content-type' : 'text/html;charset="utf-8"'
			});
			
			res.write('<h1>404</h1><p>你要找的页面被LEO吃了</p>');
			res.end();
		} else {
			res.writeHeader(200, {
				'content-type' : 'text/html;charset="utf-8"'
			});
			res.write(data);
			res.end();
		}
		
	});
	
}).listen(8888,function(){
	  console.log('success')
});

var socket = io.listen(httpServer);

socket.sockets.on('connection', function(socket) {
	//socket
	
	   var Mock = require('mockjs');
var mockData = Mock.mock({
    'list|1-10': [{
        'id|+1': 1
    }]
});
//console.log(JSON.stringify(mockData, null, 4))  //打印mockjs 数据
	
	console.log('有人通过socket连接进来了');
	socket.emit('hello', '欢迎');
	
	socket.on('hellotoo', function(data) {
		console.log(data);
	})
	
	 
	     function aaa(){
	     	 
	     	  socket.emit('receive',JSON.stringify(mockData, null, 4))
//         console.log(JSON.stringify(mockData, null, 4))
	     }
	
	  setInterval(aaa,3000)
	
	
	
	
	
	socket.broadcast.emit('a', '有新人进来了');
	

	
});