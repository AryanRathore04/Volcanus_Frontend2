const person = {
  name: "John",
  age: 30,
  salary: 20000,
  details: function () {
    console.log("This data is coming from this keyword",this.age);
    return "Shyam"
  },
};
console.log(person.details())
