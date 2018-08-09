console.log('Hello World - ugly way');
console.log('Hello World - ugly way');
console.log('Hello World - ugly way');
console.log('Hello World - ugly way');
console.log('Hello World - ugly way');

// using loop

// for (initialExpression; condition; incrementExpression)
//   single statement

// for (initialExpression; condition; incrementExpression) {
//   multi statement
//   multi statement
// }

// i is convention of 'index' and common convention to use in for loops
for (let i = 0; i < 5; i++) console.log('Hello World', i);

for (let i = 1; i <= 5; i++) console.log('Hello World', i);

for (let i = 5; i >= 1; i--) console.log('Hello World', i);

for (let i = 0; i < 5; i++) {
  if (i % 2 !== 0) console.log('Odd Number', i);
}
