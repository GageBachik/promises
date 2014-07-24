var q = require('q');
var defer = q.defer();
//make a promise
var attachTitle = function(str){
	return 'DR. ' + str;
}
defer.resolve('MANHATTAN');

var promise = defer.promise;
// use promise
promise.then(attachTitle).then(console.log);