let numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers); // [1, 2, 3]
console.log(last); // 4
console.log('type of last:', typeof last);

// Beginning
const first = numbers.shift();
console.log(numbers); // [2, 3]
console.log(first); // 1
console.log('type of first:', typeof first);

numbers = [1, 2, 3, 4, 5];

// Middle
const middle = numbers.splice(2, 1);
console.log(numbers); // [1, 2, 4, 5]
console.log(middle); // [3]

middle.push('a');
console.log(middle); // [3, 'a']
