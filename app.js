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

const assert = require('assert');

assert.deepEqual(1, 1);
console.log('is true ');

// Purpose of assert in NodeJS
// In most cases assertion are used in unit test
assert.equal(2, 2);

// Example :

let func = function(a, b){
	return a + b;
};

const x = 10;
const y = 11;

result = func(x, y);

assert.deepEqual(result, 21);
