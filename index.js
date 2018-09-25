const numbers = [1, 2, 3, 4];

const output = move(numbers, 1, -1);

console.log(output);
console.log(numbers);

// mosh's solution
function move(array, index, offset) {
  const position = index + offset;
  if (position >= array.length || position < 0) {
    console.error('Invalid offset.');
    return;
  }

  const output = [...array];
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}

// herri's solution
function move(array, index, offset) {
  if (offset >= array.length - index || offset < 0 - index) {
    console.error('Invalid offset');
    return;
  }

  const newArray = [...array];
  const movedNumber = newArray.splice(index, 1);
  const newPosition = index + offset;
  newArray.splice(newPosition, 0, movedNumber[0]);

  return newArray;
}
