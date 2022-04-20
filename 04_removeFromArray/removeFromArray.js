const removeFromArray = function (array, ...args) {
    return array.filter(element => !args.includes(element))
};

// easier to understand solution:
// const removeFromArray = function (...args) {
//     const array = args[0];
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
//     return newArray;
// };
// Note to self: simpler != better, my solution requires advanced understanding


// Do not edit below this line
module.exports = removeFromArray;
