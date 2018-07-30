var Job = require( './job.js' );
//console.log(Job+'kkk');

//console.log(typeof Job+'type');

var job1 = new Job();


job1.on( 'done' , function(details){
	console.log('job was completed on'+details.completeOn);
	job1.removeAllListeners();
});

job1.process( 'process' ); 