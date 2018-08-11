const movie = {
  title: 'a',
  releaseYear: 2018,
  rating: 4.5,
  director: 'b'
};

showProperties(movie);

// Mosh's code:
function showProperties(obj) {
  for (let key in obj)
    if (typeof obj[key] === 'string') console.log(key, obj[key]);
}

// Herri's code:
// function showProperties(obj) {
//   for (properties in obj) {
//     console.log(properties, obj[properties]);
//   }
// }
