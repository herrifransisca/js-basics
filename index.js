let numbers = [1, 2, 3, 4];
let another = numbers;

// Sol;ution 1
// numbers = [];
// console.log(numbers); // []
// console.log(another); // [1, 2, 3, 4]

// Solution 2
// numbers.length = 0;
// console.log(numbers); // []
// console.log(another); // []

// Solution 3
// numbers.splice(0, numbers.length);
// console.log(numbers); // []
// console.log(another); // []

// Solution 4
let i = 0;
while (numbers.length > 0) numbers.pop();
console.log(numbers); // []
console.log(another); // []
