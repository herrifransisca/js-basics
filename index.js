let numbers = [1, 2, 3];

const allPositive = numbers.every(number => number >= 0);

console.log(allPositive); // true

numbers = [1, -1, 2, 3];
const allPositive2 = numbers.every(number => number >= 0);
console.log(allPositive2); // false

const atLeastOnePositive = numbers.some(number => number >= 0);
console.log(atLeastOnePositive); // true
