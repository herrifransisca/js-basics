// HOISTING is the process of moving function declaration to the top of the file
function run() {
  console.log('run');
}

run();

// Function Declaration
// run();
// function run() {
//   console.log('run');
// }

// Anonymous Function Expression
walk();
const walk = function() {
  console.log('walk');
};
