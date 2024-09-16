/*
  Define a Class
*/

class People {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  sayHi() {
    console.log(`Hello, my name is ${this._name} and my age is ${this._age}`);
  }

  greeting() {
    console.log(`${this._name}: Hello World!`);
  }

  /*
    Getter and Setter
  */

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    this._age = value;
  }
}

const people = new People('John', 25);

people.sayHi();
people.greeting();

console.log(people.name);
console.log(people.age);

people.name = 'Clarissa';
console.log(people.name);
people.greeting();

people.age = 30;
console.log(people.age);
people.sayHi();