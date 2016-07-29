var code = require('../main');
var expect = require('chai').expect;

describe('math_problem', function() {
	it('3 + 3 should return 6', function() {
		expect(code.calculator(3,3,code.add)).to.be.equal(6);
	})
	it('3 - 3 should return 0', function() {
		expect(code.calculator(3,3,code.subtract)).to.be.equal(0);
	})
	it('3 * 3 should return 9', function() {
		expect(code.calculator(3,3,code.multiplication)).to.be.equal(9);
	})
	it('3 / 3 should return 1', function() {
		expect(code.calculator(3,3,code.division)).to.be.equal(1);
	})
})