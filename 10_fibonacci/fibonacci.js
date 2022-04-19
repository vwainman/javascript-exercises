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

// Do not edit below this line
module.exports = fibonacci;
