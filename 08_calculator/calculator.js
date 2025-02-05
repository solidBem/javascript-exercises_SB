const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function(arr) {
  return arr.reduce((product, factor) => product * factor)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if (num <= 1) {
    return 1;
  } else {
    let fact = 1
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
  };
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
