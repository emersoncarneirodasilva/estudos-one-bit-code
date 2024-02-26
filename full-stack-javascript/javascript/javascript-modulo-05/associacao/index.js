const Address = require("./Address");
const Person = require("./Person");

const addr = new Address("Qualquer", 1234, "Centro", "Natal", "RN");
const john = new Person("John", 39, addr);

console.log(john);
console.log(john.address.fullAddress());
