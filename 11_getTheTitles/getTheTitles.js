const getTheTitles = function (books) {
    let titles = []
    for (book of books) {
        titles.push(book.title)
    }
    return titles
};

// solution:
// const getTheTitles = function (array) {
//     return array.map(book => book.title);
// };
// NOTE TO SELF: advanced but just as readable

// Do not edit below this line
module.exports = getTheTitles;
