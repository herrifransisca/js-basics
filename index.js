const numbers = [1, -1, 2, 3];

/* 1- mapping this numbers to string */
// // const filtered = numbers.filter(n => n >= 0); // [1, 2, 3]

// // const items = filtered.map(n => '<li>' + n + '</li>'); // ["<li>1</li>", "<li>2</li>", "<li>3</li>"]

// // const html = '<ul>' + items.join('') + '</ul>';

// // console.log(html);

/* 2- mapping this number to object */
// const filtered = numbers.filter(n => n >= 0); // [1, 2, 3]

// // const items = filtered.map(n => {
// //   const obj = { value: n };
// //   return obj;
// // });

// // const items = filtered.map(n => {
// //   return { value: n };
// // });

/* If you have a single line of code and you returning a value, you can exclude the return keyword, as well as the curly braces */
// // const items = filtered.map(n => {
// //   value: n;
// // });

/* So if you are returning an object, you need to put that object in parenthesis like this */
// const items = filtered.map(n => ({ value: n }));

/* Chaining */
// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n }));

/* We can call the filter() one more time */
// const items = numbers
//   .filter(n => n >= 0)
//   .map(n => ({ value: n }))
//   .filter(obj => obj.value > 1);

/* And again we can call a map() */
const items = numbers
  .filter(n => n >= 0)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(items);
