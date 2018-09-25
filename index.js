const numbers = [1, -1, 2, 3];

// for of loop
// let sum = 0;
// for (let number of numbers) sum += number;

// reduce() - supply an initial value
// accumulator = 0, currentValue = 1 => accumulator = 1
// accumulator = 1, currentValue = -1 => accumulator = 0
// accumulator = 0, currentValue = 2 => accumulator = 2
// accumulator = 2, currentValue = 3 => accumulator = 5
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// reduce - exclude the initialization of the accumulator
// accumulator = 1, currentValue = -1 => accumulator = 0
// accumulator = 0, currentValue = 2 => accumulator = 2
// accumulator = 2, currentValue = 3 => accumulator = 5
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });

// get rid of this return keyword
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
