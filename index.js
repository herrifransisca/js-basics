const message = 'hi';
console.log(message);

// What would happen if I add this message in the code block ?
{
  const message = 'hi';
}
console.log(message); // error

// This code block can be part of a FUNCTION
function start() {
  const message = 'hi';
}
console.log(message);

// 	Declare a variable or a constant in a IF BLOCK
function start() {
  const message = 'hi';

  if (true) {
    const another = 'bye';
  }

  console.log(another); // error
}
console.log(message);

// 	We have the same concept in our LOOPS
function start() {
  const message = 'hi';

  if (true) {
    const another = 'bye';
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}

start();

// So WE CAN HAVE TWO VARIABLES OR CONSTANTS WITH THE SAME NAME, but in different function
function start() {
  const message = 'hi';
}

function stop() {
  const message = 'bye';
}

start();

// What if we define a variable or constant outside of a function ?
// Here we don't have any code blocks, so what you think is the scope of this constant ?
// THIS CONSTANT HAVE GLOBAL SCOPE.
// Global means CONSTANT IS ACCESSIBLE EVERYWHERE, GLOBALLY
const color = 'red';

function start() {
  const message = 'hi';
  console.log(color); // red
}

function stop() {
  const message = 'bye';
}

/*
	What if we have a constant WITH EXACT SAME NAME IN A FUNCTION ?
		So LOCAL VARIABLES OR LOCAL CONSTANT in a function, TAKES PRECEDENCE OVER GLOBAL VARIABLES OR CONSTANT.
*/
const color = 'red';

function start() {
  const message = 'hi';
  const color = 'blue';
  console.log(color); // blue
}

function stop() {
  const message = 'bye';
}

/*
		In general you SHOULD AVOID DEFINING GLOBAL VARIABLES OR CONSTANTS,
			§ That is consider BAD PRACTICE.
			Let me give you a metaphor,
				Imagine this is a toothbrush and each function is a person.
				You don't wanna have a toothbrush that are shared with multiple people. 
				Each person should have their own toothbrush
				
			§ Because THEY ARE ACCESSIBLE EVERYWHERE GLOBALLY,
				Each function CAN ACCIDENTLY CHANGE THE VALUE and 
        this will lead to all kinds of bugs and issues in the program
*/
