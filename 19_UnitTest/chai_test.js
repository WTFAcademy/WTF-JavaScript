const chai = require('chai');

// should
const should = chai.should();
(5).should.be.a('number');
// 这个会报错，因为 5 不是 string
(5).should.be.a('string');

// expect
const expect = chai.expect;
expect(5).to.be.a('number');

// assert
const assert = chai.assert;
assert.typeOf(5, 'number');
