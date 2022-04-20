const findTheOldest = function (people) {
    let oldestPerson = null;
    let oldestAge = 0;
    for (person of people) {
        // could have been const below
        let personAge = (person.yearOfDeath || 2022) - person.yearOfBirth;
        if (personAge > oldestAge) {
            oldestPerson = person
            oldestAge = personAge
        }
    }
    return oldestPerson
};

// solution:

// const findTheOldest = function (array) {
//     return array.reduce((oldest, currentPerson) => {
//         const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//         const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//         return oldestAge < currentAge ? currentPerson : oldest;
//     })
// };

// const getAge = function (birth, death) {
//     if (!death) {
//         death = new Date().getFullYear();
//     }
//     return death - birth;
// };

// NOTE TO SELF: solution above is overly complicated and not very readable

// Do not edit below this line
module.exports = findTheOldest;
