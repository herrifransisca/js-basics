const numbers = [1, 2, 3, 1, 4];

// #1 - if exist
console.log(numbers.indexOf(1)); // 0

// #2 - note the "type" (string - number)
console.log(numbers.indexOf('1')); // -1

// #3 - if doesn't exist
console.log(numbers.indexOf('a')); // -1

// #4 - little bit ugly
console.log(numbers.indexOf(1) !== -1); // true

// #5 - a new method achieving the same thing
console.log(numbers.includes(1)); // true

// #6 - if exist
console.log(numbers.lastIndexOf(1)); // 3

// #7 - if doesn't exist
console.log(numbers.lastIndexOf(5)); // -1

// #8 - before using SECOND PARAMETER, fromINDEX
console.log(numbers.indexOf(1)); // 0

// #9 - after using SECOND PARAMETER, fromINDEX
console.log(numbers.indexOf(1, 2)); // 3
