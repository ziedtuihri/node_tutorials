const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello, Javascript \n yohoho');
	});

server.listen(port, hostname, () => {
console.log(`Server running on ${hostname} and ${port} be carful `);
});

const assert = require('assert').strict;

assert.deepEqual(1, 1);

// Purpose of assert in NodeJS
// In most cases assertion are used in unit test

// check if a value is a true 
assert.equal(2, 2);

// Example :

let func = function(a, b){
	return a + b;
};

const x = 10;
const y = 11;

result = func(x, y);
// assert.deepEqual() check if tow are equal 
const obj1 = {
	a: {
	b: 1
	 }
	};

const obj2 = {
	a: {
	b:1
	}
	     }

const obj3 = {
	a: {
	b: 5
	}
};

const obj4 = Object.create(obj1);

assert.notEqual(1, 2);
assert.notDeepEqual(obj1, obj4);
assert.deepEqual(result, 21);
assert.deepEqual(obj1, obj2);
assert.deepStrictEqual(NaN, NaN);

const weakMap1 = new WeakMap();
const currentAge = {}; // key must be an object
const currentCity = {}; // keys must be an object
const aboutAuthor = new WeakMap();

aboutAuthor.set(currentAge, 30);
aboutAuthor.set(currentCity, 'Denver');

console.log(+currentCity + "true or false " + aboutAuthor.has(currentCity));
// Object.setPrototypeOf();

// const date = require('./myModule');

// console.log('this is the date ', date.myDateTime());

const url = require('url');

const adress = 'http://localhost:8080/default.htm?year=2017&month=february';

const q = url.parse(adress, true);

console.log(q.search, q.pathname, q.query.month, "--------", q.host);

assert.deepStrictEqual(arrayDiff([1,2], [1]), [2]);
assert.deepStrictEqual(arrayDiff([3,4,3,3,3], [3]), [4]);
assert.deepStrictEqual(arrayDiff([1,8,2], []), [1,8,2]);
assert.deepStrictEqual(arrayDiff([1,2,2,2,3], [2]), [1,3]);

function arrayDiff(a, b) {

if(a.length == 0){
	return [];
}else if(b.length == 0){
	console.log("b =0000000");
	return a;
}else{
	result = [];
	for(var i=0;i<b.length;i++) {
		console.log(i, "b[i] = ", b[i]);
		let count = 0;
		   for(let k=0;k<a.length;k++) {
			if(a[k] != b[i]) {
				result[count] = a[k];
				count++;
			}
		}
		a = result;
		}
		console.log("finaaaaaaaaaaaaaaaaaaaly", a);
		return a;
}
}
arrayDiff([1,2,2,2,3], [2]);
// console.log("function arrayDiff", arrayDiff([1,2], [1]));
