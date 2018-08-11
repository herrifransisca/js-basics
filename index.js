// Example of Truthy Falsy
// const isActive = false; // Falsy
// const isActive = true; // Truthy
// if (isActive) console.log('Active: ', isActive);
// // const name = '';  // Falsy (false)
// const name = 'Mosh'; // Truthy (true)
// if (name) console.log('Hello', name);

// Falshy:
// undefined
// null
// ''
// false
// 0
// NaN

const array = [1, 2, 3, 0, false, NaN, 'mosh', '', undefined, null];
console.log('Truthy:', countTruthy(array));

// Mosh code:
function countTruthy(array) {
  let count = 0;
  for (let value of array) if (value) count++;
  return count;
}

// Note: POOR WAY -> if (value !== undefined || value !== false || ...)

// Herri's code (IT'S NOT WORKING):
// function countTruthy(array) {
//   let totalFalsy = 0;
//   let totalItems = 0;

//   for (let x of array) {
//     totalItems++;

//     if (typeof x === 'undefined') {
//       totalFalsy++;
//       continue;
//     }

//     if (typeof x === 'null') {
//       totalFalsy++;
//       continue;
//     }

//     if (x === '') {
//       totalFalsy++;
//       continue;
//     }

//     if (x === 0) {
//       totalFalsy++;
//       continue;
//     }

//     if (x === false) {
//       totalFalsy++;
//       continue;
//     }

//     if (isNaN(x)) {
//       totalFalsy++;
//     }
//   }

//   console.log('total items', totalItems);
//   console.log('total falshy', totalFalsy);
//   return totalItems - totalFalsy;
// }
