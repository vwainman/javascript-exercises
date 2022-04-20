const findTheOldest = function (people) {
    let oldestPerson = null;
    let oldestAge = 0;
    for (person of people) {
        let personAge = (person.yearOfDeath || 2022) - person.yearOfBirth;
        if (personAge > oldestAge) {
            oldestPerson = person
            oldestAge = personAge
        }
    }
    return oldestPerson
};

// Do not edit below this line
module.exports = findTheOldest;
