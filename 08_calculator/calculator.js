const add = function(x,y) {
  return z = x + y;
	
};

const subtract = function(x, y) {
	return z = x-y;
};

const sum = function(arr) {
  let z = 0;
  arr.forEach(num => {
    z += num;
  });
  return z;
	
};

const multiply = function(arr) {
  let z = 1;
  arr.forEach(num => {
    z *= num;
  });
  return z;

};

const power = function(x,y) {
  z = x**y;
  return z;
	
};

const factorial = function(num) {
	
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  
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
