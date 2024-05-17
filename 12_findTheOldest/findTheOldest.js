const getAge = function (person) {
  const birth = person.yearOfBirth;
  let death = person.yearOfDeath;
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currPerson) =>
    getAge(oldest) < getAge(currPerson) ? currPerson : oldest
  );
};

// Do not edit below this line
module.exports = findTheOldest;
