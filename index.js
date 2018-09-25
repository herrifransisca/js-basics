const numbers = arrayFromRange(-10, -4);

console.log(numbers);

// mosh's solution
function arrayFromRange(min, max) {
  const output = [];
  for (let i = min; i <= max; i++) output.push(i);
  return output;
}

// herri's solution
function arrayFromRange(min, max) {
  let numbers = [];
  for (let number = min; number <= max; number++) numbers.push(number);

  return numbers;
}
