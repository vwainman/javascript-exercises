const fibonacci = function (num) {
    if (num < 1) {
        return "OOPS";
    }
    let preceeding_num = 1;
    let proceeding_num = 1;
    for (let i = 2; i < num; i++) {
        let temp = proceeding_num
        proceeding_num += preceeding_num;
        preceeding_num = temp
    }
    return proceeding_num;
};

// solution:
// const fibonacci = function (count) {
//     if (count < 0) return "OOPS";
//     if (count === 0) return 0;
//     let a = 0;
//     let b = 1;
//     for (let i = 1; i < count; i++) {
//         const temp = b;
//         b = a + b;
//         a = temp;
//     }
//     return b;
// };

// NOTE TO SELF: let -> const when unchanged within a single iteration

// Do not edit below this line
module.exports = fibonacci;
