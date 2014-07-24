var q = require('q');
var defer = q.defer();
//make a promise
setTimeout(function(){
	defer.resolve(console.log);
}, 1000)

var promise = defer.promise;
// use promise
promise.then(function(callback){
	callback('RESOLVED!');
}, function(error){
	console.log('promise failed: ', error);
});
