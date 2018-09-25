const numbers = [1, 2, 3, 4, 1, 1];

const output = except(numbers, [1, 4]);

console.log(output);

// mosh's solution
function except(array, excluded) {
  const output = [];
  for (let element of array)
    if (!excluded.includes(element)) output.push(element);
  return output;
}

// herri's solution
// function except(array, excluded) {
//   const numbers = [];
//   for (let i of array)
//     if (!excluded.includes(i))
//       numbers.push(i);
//   return numbers;
// }
