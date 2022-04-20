const reverseString = function (string) {
    if (string === "") {
        return ""
    }
    let reversedString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString
};

// solution:
// const reverseString = function (string) {
//     return string.split('').reverse().join('');
// };
// Note to self: take advantage of array functionalities by converting str -> arr

// Do not edit below this line
module.exports = reverseString;
