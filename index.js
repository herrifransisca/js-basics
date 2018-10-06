// Mosh's code
const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  }
};

console.log(circle.area); // 3.141592653589793

// Herri's code
const circle = {
  circleArea: 1,
  circleRadius: 0,
  get radius() {
    return this.circleRadius;
  },
  set radius(value) {
    this.circleRadius = value;
  },
  get area() {
    return this.circleArea;
  }
};

circle.radius = 10;
console.log(circle.radius);

circle.area = 3;
console.log(circle.area);
