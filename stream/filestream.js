//file stream

var fs = require('fs');

var read = fs.createReadStream('./httpserver.js');

//var zip = zlib.createGzip();
var write = fs.createWriteStream('file.txt');

read.pipe(write);