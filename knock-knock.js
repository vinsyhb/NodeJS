var events = require('events');
var emiiter = new events.EventEmitter();

emiiter.once('knock', function(){
	console.log('knocked only once')
});


emiiter.on('knock', function(){
	console.log('knocked first')
});

emiiter.on('knock', function(){
	console.log('knocked second');
});

emiiter.emit('knock');

emiiter.emit('knock');