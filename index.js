// String primitive
let message = 'This is my first message';

// String object
const another = new String('hi');

console.log(message.length); // 23

console.log(message[0]); // T
console.log(message[1]); // h

console.log(message.includes('my')); // true
console.log(message.includes('not')); // false

console.log(message.startsWith('This')); // true
console.log(message.startsWith('this')); // false

console.log(message.endsWith('e')); // true

console.log(message.indexOf('my')); // 8

console.log(message.replace('first', 'second')); // This is my second message
// Note that this RETURNS A NEW STRING and DOESN’T REPLACE THE ORIGINAL ONE
console.log(message); // This is my first message

console.log(message.toUpperCase());
console.log(message.toLowerCase());

message = ' This is my first message ';
console.log(message.trim());
console.log(message.trimLeft());
console.log(message.trimRight());

console.log(message.split(' ')); // (7) ["", "this", "is", "my", "first", "message", ""]

message = "This is my 'first message";
console.log(message); // This is my 'first message

message = 'This is my\n first message';
console.log(message); // This is my
//  First message
