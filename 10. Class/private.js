class Car {
  #brand;
  #color;

  constructor(brand, color) {
    this.#brand = brand;
    this.#color = color;
  }

  get brand() {
    return this.#brand;
  }

  get color() {
    return this.#color;
  }

  set brand(value) {
    this.#brand = value;
  }
}

const car = new Car("Toyota", "Black");

console.log(car.brand);
console.log(car.color);

car.brand = "Honda";
console.log(car.brand);

/*
  Use Case
*/

class User {
  #password; // Private field for storing the user's password

  constructor(username, password) {
      this.username = username;
      this.#password = password; // Store password securely in a private field
  }

  // Public method to check the password
  checkPassword(inputPassword) {
      return inputPassword === this.#password;
  }
}

const user = new User("john_doe", "securepassword123");

console.log(user.username); // Output: john_doe
// console.log(user.#password); // Error: Private field '#password' is not accessible

console.log(user.checkPassword("securepassword123")); // Output: true
console.log(user.checkPassword("wrongpassword")); // Output: false
