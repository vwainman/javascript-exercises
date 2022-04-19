const ftoc = function (fahrenheit) {
  let conversion = (fahrenheit - 32) * (5 / 9)
  return parseFloat(conversion.toFixed(1))
};

const ctof = function (celcius) {
  let conversion = (celcius * (9 / 5)) + 32
  return parseFloat(conversion.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
