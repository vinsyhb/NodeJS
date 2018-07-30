//http

var http = require('http');// http module to read the stream on network

var server = http.createServer(function(req,res){
	req.setEncoding('utf8');
	req.on('data', function(chunk){
		console.log('data read'+chunk);
		res.write(chunk);
	});
	
	req.on('end', function(){
		res.end();
	});
});

server.listen(1234);