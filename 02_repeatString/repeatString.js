const repeatString = function (string, number) {
    let repeatedString = ""
    if (number < 0) {
        return "ERROR"
    }
    for (let i = 0; i < number; i++) {
        repeatedString += string
    }
    return repeatedString
};

// solution:
// const repeatString = function (word, times) {
//     if (times < 0) return 'ERROR';
//     let string = '';
//     for (let i = 0; i < times; i++) {
//         string += word;
//     }
//     return string;
// };
// Note to self: improve param names, remove curly brackets on singular ifs,
// create a variable after edge case check, implement ;

// Do not edit below this line
module.exports = repeatString;
