showNumbers(10);

// Mosh's code:
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    // cleaner and less noisy
    const message = i % 2 === 0 ? 'EVEN' : 'ODD';
    console.log(i, message);

    // if (i % 2 === 0) console.log(i, 'EVEN');
    // else console.log(i, 'ODD');
  }
}

// Herri's code:
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let type = i % 2 === 0 ? 'EVEN' : 'ODD';
//     console.log(i, type);
//   }
// }
