var http = require('http');
var fs = require('fs');

var documentRoot = 'E:\gitHub\examples\nodejs\nodeServer\websocket\server（服务端）\socket.io\www';

var httpServer = http.createServer(function(req, res) {
	
	var url = req.url;
	//console.log(url);
	
	var file = documentRoot + url;
	console.log(file);
	
	fs.readFile(file, function(err, data) {
		
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
	
}).listen(8888);
