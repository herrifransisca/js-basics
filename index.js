// PRIMITIVE / VALUE TYPE
// let x = 10;
// let y = x;

// x = 20;
// console.log(x);  // 20
// console.log(y);  // 10

// REFERENCE TYPE
// let x = { value: 10 };
// let y = x;

// x.value = 20;

// console.log(x); // { value: 20 }
// console.log(y); //  { value: 20 }

// ANOTHER EXAMPLE - Value / Primitive Type
// let number = 10;

// function increase(number) {
//   number++;
// }

// increase(number);
// console.log(number); // 10

// ANOTHER EXAMPLE - Value / Primitive Type
let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj); // { value: 11 }
