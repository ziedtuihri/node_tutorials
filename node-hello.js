const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, world i m her `);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

console.log(process.versions);
const assert = require('assert');

const { message } = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
  });
  
  // Verify error output:
  try {
    assert.strictEqual(2, 2);
  } catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
  }

assert.deepEqual([[[1, 2, 3]], 4, 5], [[[1, 2, 3]], 4, 5]);

const obj1={
    a: {
        b: 1
    }
};
const obj2={
    a: {
        b:1
    }
};
const obj3={
    a: {
        b: 1
    }
};

const obj4 = Object.create(obj1);

assert.deepEqual(obj1, obj1);
assert.deepEqual(obj1, obj2);
assert.deepEqual(obj1, obj3);
// assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate, Date.prototype);

console.log(Date.prototype, '::', new Date(), fakeDate);
// Different [[Prototype]]:
