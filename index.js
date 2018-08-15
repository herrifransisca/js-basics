showPrimes(10);

function showPrimes(limit) {
  for (let number = 2; number <= limit; number++)
    if (isPrime(number)) console.log(number);
}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) return false;

  return true;
}

// Before Refactoring - making more simple:
// function isPrime(number) {
//   let isPrime = true;
//   for (let factor = 2; factor < number; factor++)
//     if (number % factor === 0) {
//       isPrime = false;
//       break;
//     }

//   return isPrime;
// }

// Mosh's code (before refactoring - doing single thing)
// function showPrimes(limit) {
//   for (let number = 2; number <= limit; number++) {
//     let isPrime = true;
//     for (let factor = 2; factor < number; factor++)
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }

//     if (isPrime) console.log(number);
//   }
// }

// Herri's code:
// function showPrimes(limit) {
//   for (let i = 1; i <= limit; i++) {
//     let count = 0;
//     for (let x = 1; x <= i; x++) if (i % x === 0) count++;

//     if (count === 2) console.log(i);
//   }
// }
