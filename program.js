var q = require('q');
var defer = q.defer();

q(console.log).then(function(callback){
	return callback;
}, function(){
	callback('RESOLVED!');
});