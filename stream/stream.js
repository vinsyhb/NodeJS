process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
	console.log('chunk of data'+chunk);
});

process.stdin.on('end', function(){
	console.log('dtream ended');
});