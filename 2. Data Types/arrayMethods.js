// Array.push()
// Adding a new item on the back of the array

const people = ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi'];
console.log(people);

people[5] = 'Abi'; // Old Way to add new item in array

console.log(people); // ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

people.push('Yoga');

console.log(people); // ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi', 'Yoga']

// Array.pop();
// Removing the last item inside the array

people.pop();

console.log(people); // ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

// Array.unshift();
// Adding a new item on the start of the array

people.unshift('Kelvin');

console.log(people); // ['Kelvin', 'Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

// Array.shift();
// Removing the first item inside the array

people.shift(); 

console.log(people); // ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

// String.split();
// Convert String into Array

const animals = 'Cat, Dog, Bird, Rat, Rabbit, Frog';
const arrayOfAnimals = animals.split(', ');
console.log(arrayOfAnimals); // ['Cat', 'Dog', 'Bird', 'Rat', 'Rabbit', 'Frog']

// Array.join();
// Convert Array into String
const joinedArray = people.join(', ');
console.log(joinedArray); // Agif, Ihsan, Ghaniyo, Nisa, Adi, Abi

// String.trim();
const name = '        Ghaniyo ';
console.log(name);

const trimmedName = name.trim();
console.log(trimmedName);

// Use Case Looping and Trim
// Complex One
const planets = 'Mars, Venus, Earth, Jupiter, Saturn, Frog';
const arrayOfPlanets = planets.split(',')
console.log(arrayOfPlanets); // [ 'Mars', ' Venus', ' Earth', ' Jupiter', ' Saturn', ' Frog' ]

let trimmedPlanets = [];

// CTRL + /

for (const planet of arrayOfPlanets) {
  // console.log(planet);
  const formattedPlanet = planet.trim();
  // console.log(formattedPlanet);
  trimmedPlanets.push(formattedPlanet);
  // console.log(trimmedPlanets);
}

console.log(trimmedPlanets); // [ 'Mars', 'Venus', 'Earth', 'Jupiter', 'Saturn', 'Frog' ]