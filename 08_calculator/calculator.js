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

// solutions:
// const add = function (a, b) {
//   return a + b;
// };

// const subtract = function (a, b) {
//   return a - b;
// };

// const sum = function (array) {
//   return array.reduce((total, current) => total + current, 0);
// };

// const multiply = function (array) {
//   return array.length
//     ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
//     : 0;
// };

// const power = function (a, b) {
//   return Math.pow(a, b);
// };

// const factorial = function (n) {
//   if (n === 0) return 1;
//   let product = 1;
//   for (let i = n; i > 0; i--) {
//     product *= i;
//   }
//   return product;
// };

// This is another implementation of Factorial that uses recursion
// const recursiveFactorial = function (n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// };

// NOTE TO SELF: change nums to numsArray


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
