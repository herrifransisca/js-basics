// Function Declaration
function walk() {
  console.log('walk');
}

// Named Function Expression
const jump = function jump() {
  console.log('jump');
};

// Anonymous Function Expression
const run = function() {
  console.log('run');
};
let move = run;
run();
move();
