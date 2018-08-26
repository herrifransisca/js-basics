function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log('draw');
    }
  };
}

const circleUsingFactoryFunction = createCircle();

function Circle(radius) {
  this.radius;
  this.draw = function() {
    console.log('draw');
  };
}

const circleUsingConstructorFunction = new Circle();

let x = {};
// let x = new Object();

// using the constructor
let a = new String(); // '', "", ``
let b = new Boolean(); // true, false
let c = new Number(); // 1, 2, 3, ...

// using this literals is CLEANER AND SIMPLER then using the constructor
let aa = '';
let bb = true;
let cc = 1;
