/*
Quiz 1: Total Price

Get the total price by using looping/iteration.
Finish the objective by using all 3 different loopings:
- For
- For of
- For in
*/

const groceries = [15000, 30000, 50000, 100000, 500000];
let totalPrice = 0;

for (const grocery of groceries) {
  totalPrice = totalPrice + grocery;
  // totalPrice += grocery;
}

console.log(totalPrice);

/*
Quiz 2: Looping + Condition

Find the correct key to open the Golden Door by using looping and condition (if-else);
- If the key has been found, print: "You have opened the door".
- If the key is not found, print: "The don't have the right key"
*/

const requiredKey = 'Golden Key'; // 'White Key'
const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

