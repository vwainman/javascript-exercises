const caesar = function (string, shift_num) {
    // Wrapping around
    if (shift_num < 0) {
        return caesar(string, shift_num + 26);
    }
    let transformedString = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i]
        let unicode = char.charCodeAt();
        if (char.match(/[a-z]/)) {
            char = String.fromCharCode(((unicode - 97 + shift_num) % 26) + 97);
        }
        else if (char.match(/[A-Z]/)) {
            char = String.fromCharCode(((unicode - 65 + shift_num) % 26) + 65);
        }
        transformedString += char;
    }
    return transformedString;
};

// solution:

// const caesar = function (string, shift) {
//     return string
//         .split("")
//         .map(char => shiftChar(char, shift))
//         .join("");
// };

// const codeSet = code => (code < 97 ? 65 : 97);
// const mod = (n, m) => (n % m + m) % m;

// const shiftChar = (char, shift) => {
//     const code = char.charCodeAt();

//     if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
//         return String.fromCharCode(
//             mod(code + shift - codeSet(code), 26) + codeSet(code)
//         );
//     }
//     return char;
// };

// NOTE TO SELF: the above solution is more modular, efficient, BUT shiftChar is only applicable
// to letters, and should be named to reflect as such, i.e. shiftLetter

// Do not edit below this line
module.exports = caesar;
