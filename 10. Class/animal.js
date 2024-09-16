/*
  Inheritance Class
*/

class Animal {
  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log(`${this.type} eats.`);
  }

  speak() {
    console.log(`${this.type} makes a sound.`);
    this.eat(); // Trigger "eat" everytime "speak"
  }
}

const animal = new Animal('Bird');
animal.speak(); // Bird makes a sound.
// animal.eat(); // Bird eats.

class Cat extends Animal {
  speak() {
    this.eat();
    console.log(`${this.type} meowing.`);
  }
}

const cat = new Cat('Cat');
cat.speak(); // Cat meowing.
// cat.eat(); // Cat eats.

class Dog extends Cat {
  speak() {
    this.eat();
    console.log(`${this.type} barks.`);
  }
}

const dog = new Dog('Dog');
dog.speak(); // Dog barks.
// dog.eat(); // Dog eats.

