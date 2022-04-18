const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0
        || typeof num1 != "number"
        || typeof num2 != "number") {
        return "ERROR"
    }
    let sum = 0;
    const largest = Math.max(num1, num2);
    const smallest = Math.min(num1, num2);
    for (let i = smallest; i <= largest; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
