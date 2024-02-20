let person = {
  name: "Emerson",
  age: 36,
  greeting() {
    alert(`Hello, World! Meu nome é ${this.name} e tenho ${this.age} anos`);
  },
};

console.log(person);

person.greeting();
