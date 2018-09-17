const courses = [{ id: 1, name: 'a' }, { id: 2, name: 'b' }];

// after using arrow function
const course = courses.find(course => course.name === 'a');

// before using arrow function
// const course = courses.find(function(course) {
//   return course.name === 'a';
// });

console.log(course);
