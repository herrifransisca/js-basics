const marks = [80, 80, 50];

// Average = 70   (80 + 80 + 50) / 3

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

// Mosh's code (AFTER REFACTORING, APPLYING "SEPARATE CONCERN":
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let mark of marks) sum += mark;

  return sum / marks.length;
}

// Herri's code (TRY TO REFACTORING, APPLYING "SEPARATE CONCERN":
// function calculateGrade(marks) {
//   const average = calculateAverage(marks);

//   return calculateMark(average);
// }

// function calculateAverage(marks) {   // use name : array instead of marks -> because it can be used for another purposes like temperatur, etc, not just only "GRADE"
//   let sum = 0;
//   for (let mark of marks) sum += mark;

//   return sum / marks.length;
// }

// function calculateMark(average) {    // no need this function again, calculate grade works the same thing
//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// }

// Mosh's code (BEFORE REFACTORING, WITHOUT APPLYING "SEPARATE CONCERN":
// function calculateGrade(marks) {
//   let sum = 0;
//   for (let mark of marks) sum += mark;

//   const average = sum / marks.length;

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// }

// Herris' code:
// function calculateGrade(marks) {
//   let count = 0;
//   let sum = 0;

//   for (let mark of marks) {
//     count++;
//     sum += mark;
//   }

//   const average = sum / count;

//   if (average >= 0 && average <= 59) return 'F';
//   else if (average >= 60 && average <= 69) return 'D';
//   else if (average >= 70 && average <= 79) return 'C';
//   else if (average >= 80 && average <= 89) return 'B';
//   else return 'A';
// }

// Compare to Mosh's code with Herri's code:
// 1. count -> can be replaced with "marks.length"
//    curly braces on for statement -> can be removed
// 2. if (average >= 0 && average <= 59) return 'F' -> can be replaced with if (average < 60) return 'F';
//    else -> can be removed, because the above "return" code, the code below, will not executed.
//    "the last" else -> can be removed, just "return A;"
