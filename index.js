const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second]; // [1, 2, 3, 4, 5, 6]

// add an element in between them
// add something at the end
const combined2 = [...first, 'a', ...second, 'b']; // [1, 2, 3, 'a', 4, 5, 6, 'b']
