const ftoc = function (fahrenheit) {
  let conversion = (fahrenheit - 32) * (5 / 9)
  return parseFloat(conversion.toFixed(1))
};

const ctof = function (celcius) {
  let conversion = (celcius * (9 / 5)) + 32
  return parseFloat(conversion.toFixed(1))
};


// Solutions:
// const ftoc = function (f) {
//   return Math.round((f - 32) * (5 / 9) * 10) / 10;
// };

// const ctof = function (c) {
//   return Math.round(((c * 9 / 5) + 32) * 10) / 10;
// };
// NOTE to remember: Math.round rounds to 0 decimals, therefore the
// use of * 10 / 10 to work around that


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
