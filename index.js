const numbers = [1, 2, 3, 4, 1];

const count = searchOccurrences(numbers, 1);

console.log(count);

function searchOccurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array) if (element === searchElement) count++;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}

function searchOccurrences(array, searchElement) {
  // let occurrences = 0;
  // for (let element of array) if (element === searchElement) occurrences++;
  // return occurrences;

  return array.reduce((occurrences, currentValue) => {
    return currentValue === searchElement
      ? (occurrences += 1)
      : (occurrences += 0);
  }, 0);
}
