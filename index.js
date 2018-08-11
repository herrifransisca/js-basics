console.log(sum(10));

// Multiples of 3: 3, 6, 9
// Multiples of 5: 5, 10

// Mosh's code:
function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}

// Herri's code:
// function sum(limit) {
//   let total = 0;

//   for (let i = 1; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) total += i;
//   }

//   return total;
// }
