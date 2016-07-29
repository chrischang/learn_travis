var code = require('../main');
var expect = require('chai').expect;

describe('math_problem', function() {
	it('should return 3', function() {
		expect(code.plus(1, 2)).to.be.equal(3);
	})
	it('should return 5', function() {
		expect(code.plus(2, 3)).to.be.equal(5);
	})
})