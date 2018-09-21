const numbers = [1, 2, 3];

const joined = numbers.join(',');
console.log(joined); // 1,2,3

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts); // ['This', 'is', 'my', 'first', 'message']

const combined = parts.join('-');
console.log(combined); // This-is-my-first-message
