// REST OPERATOR
function sum(...args) {
  console.log(args); // [1, 2, 3, 4, 5, 10]
}

console.log(sum(1, 2, 3, 4, 5, 10)); // undefined

// // if i remove ...
function sum(args) {
  console.log(args); // 1
}

console.log(sum(1, 2, 3, 4, 5, 10)); // undefined

// reduce()
function sum(...args) {
  return args.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 10)); // 25

// Imagine we're gonna use "this function" to calculate the "total cost of items in the shopping cart".
// we wanna have a "discount factor"
function sum(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30));  // 45


// WE CANNOT HAVE PARAMETER AFTER THE REST OPERATOR
function sum(discount, ...prices, someValues) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(sum(0.1, 20, 30, 1));  // Uncaught SyntaxError: Rest parameter must be last formal parameter
