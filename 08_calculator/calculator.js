const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  return nums.reduce(
    (prevValue, currentValue) => prevValue + currentValue, 0);
};

const multiply = function (nums) {
  return nums.reduce(
    (prevValue, currentValue) => prevValue * currentValue, 1);
};

const power = function (base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  else if (exponent % 2 === 0) {
    return power(base, parseInt(exponent / 2)) * power(base, parseInt(exponent / 2));
  } else {
    return base * power(base, parseInt(exponent / 2)) * power(base, parseInt(exponent / 2));
  }
};

const factorial = function (num) {
  if (num < 0)
    return "ERROR";
  else if (num == 0)
    return 1;
  else {
    return (num * factorial(num - 1));
  }
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
