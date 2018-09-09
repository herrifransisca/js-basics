console.log(Math.PI);

console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

const min = 2;
const max = 4;
console.log(Math.random(max - min) - min);

console.log(Math.round(1.9)); // 2
console.log(Math.round(1.4)); // 1
console.log(Math.round(1.5)); // 2

console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5
