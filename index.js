function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('Draw');
  };
}

const another = new Circle(1);

const Circle1 = new Function(
  'radius',
  `
this.radius = radius;
this.draw = function() {
  console.log('draw');
}
`
);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);
const circle = new Circle1(1);

// Circle.call(window, 1);
// const circle = Circle1(1);
