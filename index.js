const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(function(value) {
//   return value >= 0;
// });

// arrow function
// const filtered = numbers.filter(value => value >= 0);

// we can make this code a little bit shorter
const filtered = numbers.filter(n => n >= 0);

console.log(filtered);
