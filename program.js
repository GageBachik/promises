var q = require('q');
var defer = q.defer();
//make a promise
defer.resolve('SECOND');

var promise = defer.promise;
// use promise
promise.then(console.log, console.log);
console.log('FIRST');