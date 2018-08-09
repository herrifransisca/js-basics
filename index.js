// BREAK and CONTINUE that CAN CHANGE how the LOOPS BEHAVE
// applies to ALL KIND OF LOOPS

// let i = 0;
// while (i <= 10) {
//   console.log(i); // displays 0 to 10
//   i++;
// }

// let i = 0;
// while (i <= 10) {
//   if (i === 5) break;

//   console.log(i); // displays 0 to 4
//   i++;
// }

let i = 0;
while (i <= 10) {
  if (i % 2 === 0) {
    i++;
    continue;
  }

  console.log(i); // displays 1, 3, 5, 7, 9
  i++;
}
