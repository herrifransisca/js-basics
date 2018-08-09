// Exercise:
// write a function that takes two numbers
// and return the maximum of the two.

let number = max(5, 7);
console.log(number);

function max(a, b) {
  // if (a > b) return a;
  // else return b;

  // refactoring: remove else (because 'return b' is not executed, if 'return a' is executed)
  // if (a > b) return a;
  // return b;

  // refactoring: using conditional operator
  return a > b ? a : b;
}

// MOSH TIPS:
// when writing code, FUNCTIONS, you should test your FUNCTIONS with different possible values
// e.g. max(5, 7), max(7, 5), max(7, 7)
