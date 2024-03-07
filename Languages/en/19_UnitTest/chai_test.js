const chai = require('chai');

// should
const should = chai.should();
(5).should.be.a('number');
// This will report an error because 5 is not a string
(5).should.be.a('string');

// expect
const expect = chai.expect;
expect(5).to.be.a('number');

// assert
const assert = chai.assert;
assert.typeOf(5, 'number');
