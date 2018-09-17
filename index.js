const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

// find() - found
const course = courses.find(function(course) {
  return course.name === 'a'; // { id: 1, name: 1}
});

// find() - not found
const course = courses.find(function(course) {
  return course.name === 'xyz'; // undefined
});

// findIndex() - found
const course = courses.findIndex(function(course) {
  return course.name === 'a'; // 0
});

// findIndex() - not found
const course = courses.findIndex(function(course) {
  return course.name === 'xyz'; // -1
});

console.log(course);
