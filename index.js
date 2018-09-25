const numbers = [1, 2, 3, 4];

// console.log(numbers.includes(1));
console.log(includes(numbers, 1));

// mosh's solution
function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

// herri's solution
function includes(array, searchElement) {
  for (let i of array) if (i === searchElement) return true;
  return false;
}
