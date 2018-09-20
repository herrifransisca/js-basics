let first = [1, 2, 3];
const second = [4, 5, 6];

let combined = first.concat(second); // [1, 2, 3, 4, 5, 6]

// 1st way to use slice()
// const slice = combined.slice(2, 4); // [3, 4]

// 2nd way to use slice()
// const slice = combined.slice(2); // [3, 4, 5, 6];

// 3rd way to use slice()
const slice = combined.slice(); // [1, 2, 3, 4, 5, 6]

console.log(combined);
console.log(slice);

/* 
One thing that you need to understand about both of these method ( concat() and slice() ) is that :
	
  If you're dealing with PRIMITIVE VALUES, this primitive would be copied into the target array

  If you HAVE OBJECTS in your array, object themselves are not copied, their references are copied 
  And that means the element in both the input and output arrays would point to the same object.
*/

first = [{ id: 1 }];
combined = first.concat(second);
first[0].id = 10;
console.log(combined); // [ {id: 10}, 4, 5, 6]
