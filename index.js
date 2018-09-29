// javascript is a dynamic language
let x = 1;
x = 'a';

// We Have the same concept in "arguments of a function"
function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2)); // 3

// this function have two parameters, WE CAN PASS ONLY ONE ARGUMENT.
function sum(a, b) {
  return a + b; // 1 + undefined
}
console.log(sum(1)); // NaN

// The same happen if we don't pass any arguments.
function sum(a, b) {
  return a + b; // undefined + undefined
}
console.log(sum()); // NaN

// In this case, WE CAN PASS, let's say "5 arguments"
function sum(a, b) {
  return a + b; // 1 = 2
}
console.log(sum(1, 2, 3, 4, 5)); // 3

//a special object called ARGUMENTS
function sum(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(sum(1, 2, 3, 4, 5));

// CHANGE this function to RETURN THE SUM OF ALL OF THIS ARGUMENTS - simple algorithm
function sum(a, b) {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// we CAN COMPLETELY REMOVE THESE PARAMETERS here
function sum() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5));
