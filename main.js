function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function multiplication(a,b) {
	return a * b;
}

function division(a,b) {
	return a / b;
}

function calculator (a, b, cb) {
	return cb(a,b);
}

module.exports = {
	add,
	subtract,
	multiplication,
	division,
	calculator
};