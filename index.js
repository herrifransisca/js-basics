// mosh's code
try {
  const numbers = [1, 2, 3, 4, 1];
  const count = countOccurences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Invalid array.');

  return array.reduce((accumulator, current) => {
    const occurences = current === searchElement ? 1 : 0;
    return accumulator + occurences;
  }, 0);
}

// herri's code
const numbers = [1, 2, 3, 4, 1];

try {
  const count = countOccurences(null, 1);
  console.log(count);
} catch (e) {
  console.log(e.message, e);
}

function countOccurences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('Not Array');

  return array.reduce((accumulator, current) => {
    const occurences = current === searchElement ? 1 : 0;
    return accumulator + occurences;
  }, 0);
}
