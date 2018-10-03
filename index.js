// 	Use "let keyword"
function start() {
  for (let i = 0; i < 5; i++) console.log(i);

  console.log(i); // error
}

start();

// Change "let" to "VAR"
function start() {
  for (var i = 0; i < 5; i++) console.log(i);

  console.log(i); // 0 | 1 | 2 | 3 | 4 | 5
}

start();

// 	Let's take a look at another example:
//  "var" -> color is accessible
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      var color = 'red';
    }
  }

  console.log(color); // red
}

start();

//  "let" -> color is NOT accessible
//  THAT'S HOW MOST LANGUAGES WORK
function start() {
  for (var i = 0; i < 5; i++) {
    if (true) {
      let color = 'red';
    }
  }

  console.log(color); // error
}

start();

// the second issue is WITH GLOBAL VARIABLES
// The "VAR" keyword attaches this color variable to the window object.
// window.color -> 'red'
var color = 'red';
let age = 30;

// the "let keyword" to define a global variable,
// that global variable is NOT ATTACH to the WINDOW OBJECT
// window.age -> undefined

// 	So technically it's a global function, attached to the window object and :
// 	THAT IS BAD PRACTICE. But how can we PREVENT THIS ?
// window.sayHi() -> 'hi'
function sayHi() {
  console.log('hi');
}
