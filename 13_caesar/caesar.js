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
caesar('Hello, World!', 5);
// Do not edit below this line
module.exports = caesar;
