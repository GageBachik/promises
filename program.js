var q = require('q');
var defer = q.defer();
//make a promise
setTimeout(function(){
	defer.resolve(console.log);
	defer.reject(console.log);
}, 300);

var promise = defer.promise;
// use promise
promise.then(function(callback){
	callback('I FIRED');
}, function(callback){
	callback('I DID NOT FIRE');
});
