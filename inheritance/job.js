var utils = require('util');
var events = require('events');
var Job = function(){
	var job = this;
	this.process = function(){
		job.emit('done', {completeOn: new Date()});
	}
}

utils.inherits(Job,events.EventEmitter);
module.exports = Job;