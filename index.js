// Falsy (false) values in JavaScript:
// undefined
// null
// 0
// false
// ''
// NaN (not a number)

// Anything that is not Falsy -> Truthy

// Short-circuiting

// Real-world example:
let userColor = 'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor); // red

userColor = undefined;
currentColor = userColor || defaultColor;
console.log(currentColor); // blue
