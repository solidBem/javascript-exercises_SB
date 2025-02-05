const findTheOldest = function(arr) {
    arr.forEach(function(person) {
        if (!person.hasOwnProperty("yearOfDeath")) {
            person.yearOfDeath = new Date().getFullYear();
        }
    })
    const age = arr.sort(function(a, b) { 
        const prevPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        if (prevPerson > nextPerson) {
            return -1;
        } else {
            return 1;
        }
    });
    return age[0];
  };

// Do not edit below this line
module.exports = findTheOldest;
