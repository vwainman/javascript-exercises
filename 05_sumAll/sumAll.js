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

// solution:
// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0 || max < 0) return "ERROR";
//     if (min > max) {
//         const temp = min;
//         min = max;
//         max = temp;
//     }
//     let sum = 0;
//     for (let i = min; i < max + 1; i++) {
//         sum += i;
//     }
//     return sum;
// };
// Note to self: isInteger is more concise than typeof comparisons,
// improve naming, adjust bad args later


// Do not edit below this line
module.exports = sumAll;
