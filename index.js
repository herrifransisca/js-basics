let courses = [{ id: 1, name: 'Node.js' }, { id: 2, name: 'JavaScript' }];

// do nothing
// courses.sort();

courses.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses); // [{ id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js'}]

// change the 'J' to lowercase
courses = [{ id: 1, name: 'Node.js' }, { id: 2, name: 'javaScript' }];

// javascript becomes no. 2, below node.js
console.log(courses); // [{ id: 1, name: 'Node.js' }, { id: 2, name: 'javaScript' }];

// To solve this problem, we should EXCLUDE CASE SENSITIVITY when COMPARING these names.
// Both these names should be either lowercase or uppercase.
courses.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});

// javascript becomes no. 1 AGAIN, above node.js
console.log(courses); // [{ id: 2, name: 'javaScript' }, { id: 1, name: 'Node.js'}]
