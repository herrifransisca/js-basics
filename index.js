// console.log(sum2(1, 2, 10));
console.log(sum([1, 2, 10]));

// Mosh's solution
function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];

  return items.reduce((a, b) => a + b);
}

// Herri's solution:
function sum2(numbers) {
  const array = Array.isArray(numbers) ? numbers : [...arguments];
  return array.reduce((a, b) => a + b);

  // if (Array.isArray(numbers)) return numbers.reduce((a, b) => a + b);

  // const array = [...arguments];
  // return array.reduce((a, b) => a + b);

  // let total = 0;
  // for (let value of arguments) {
  //   total += value;
  // }
  // return total;

  // let sum = 0;
  // for (let key in arguments) {
  //   sum += Number(arguments[key]);
  // }
  // return sum;

  // let sum = 0;
  // for (let key of Object.entries(arguments)) {
  //   sum += key[1];
  // }
  // return sum;
}
