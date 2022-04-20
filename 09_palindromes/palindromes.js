const palindromes = function (string) {
    if (string == "") {
        return true
    }
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g;
    const modString = string.replace(regex, '').toLowerCase();
    let cutoff = 0;
    let rightReversed = "";
    if (modString.length % 2 == 0) {
        cutoff = (modString.length / 2);
        rightReversed = modString.slice(cutoff).split("").reverse().join("");
        return modString.slice(0, cutoff) == rightReversed;
    }
    else {
        cutoff = Math.floor(modString.length / 2)
        rightReversed = modString.slice(cutoff).split("").reverse().join("");
        return modString.slice(0, cutoff + 1) == rightReversed;
    }
}

// solution:
// const palindromes = function (string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//         processedString
//             .split("")
//             .reverse()
//             .join("") == processedString
//     );
// };
// NOTE TO SELF: again, apply functionality of arrays to your advantage to minimize complexity.

// Do not edit below this line
module.exports = palindromes;
