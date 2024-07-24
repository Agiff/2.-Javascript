// const keys = ['Red Key', 'Blue Key', 'Green Key', 'Golden Key', 'Yellow Key', 'Black Key'];

for (const key of keys) {
  console.log(key); // 6x looping
  for (const character of key) {
    console.log(character); // 6 x 6 = 36x looping
  }
}

// *****
// *****
// *****
// *****
// *****

let str = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    str += '*';
  }
  console.log(str);
  str = '';
}