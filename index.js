showStars(5);

// Mosh's solution: (using NESTED LOOP)
function showStars(rows) {
  for (let row = 1; row <= rows; row++) {
    let pattern = '';
    for (let i = 1; i <= row; i++) pattern += '*';
    console.log(pattern);
  }
}

// Herri's code:
// function showStars(rows) {
//   let stars = '';
//   for (let i = 0; i < rows; i++) {
//     stars += '*';
//     console.log(stars);
//   }
// }
