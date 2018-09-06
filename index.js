const circle = {
  radius: 1,
  draw() {
    console.log('draw');
  }
};

// 1st way
// const another = {};
// for (let key in circle) another[key] = circle[key];
// Notes:
//    another[key] = circle[key];
//    equavalent to :
//    another['radius'] = circle['radius'];

// 2nd way - Object.assign()
// const another = Object.assign({}, circle);

// 3rd way - spread operator
const another = { ...circle };

console.log(another);
