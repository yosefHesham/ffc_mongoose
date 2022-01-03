const mongoose = require("mongoose");

let Person;

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

Person = mongoose.model("Person", personSchema);
const createAndSavePerson = (done) => {
  const person = new Person({
    name: "yousef",
    age: 23,
    favoriteFoods: ["Ma2loba", "fra5", "la7ma"],
  });
  person.save(done);
};

// const arrayOfPeople = [
//   new Person({
//     name: "hussein",
//     age: 23,
//     favoriteFoods: ["Ma2loba", "fra5", "la7ma"],
//   }),
//   new Person({
//     name: "hussam",
//     age: 23,
//     favoriteFoods: ["Ma2loba", "fra5", "la7ma"],
//   }),
//   new Person({
//     name: "wael",
//     age: 23,
//     favoriteFoods: ["Ma2loba", "fra5", "la7ma"],
//   }),
// ];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, done);
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, done);
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, done);
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, done);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById({ _id: personId }, function (err, data) {
    const person = data;
    person.favoriteFoods.push(foodToAdd);
    person.save(done);
  });
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    { name: personName },
    { age: ageToSet },
    { new: true },
    done
  );
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId, done);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";
  Person.remove({ name: nameToRemove }, done);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
