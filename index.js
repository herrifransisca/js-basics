const numbers = [1, 2, 3, 4];

const max = getMax(numbers);

console.log(max);

// mosh's solution
function getMax(array) {
  if (array.length === 0) return undefined;

  // let max = array[0];

  // for (let i = 1; i < array.length; i++) if (array[i] > max) max = array[i];

  // return max;

  return array.reduce((a, b) => (a > b ? a : b));
}

// herri's solution
// function getMax(array) {
//   if (array.length === 0) return [];

//   // let max = 0;
//   // for (let element of array) if (element > max) max = element;
//   // return max;

//   return array.reduce((max, current) => {
//     return current > max ? (max = current) : max;
//   });
// }
