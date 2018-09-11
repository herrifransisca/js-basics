const address1 = new Address('a', 'b', 'c');
const address2 = new Address('a', 'b', 'c');
const address3 = address1;

console.log('are-equal', areEqual(address1, address2)); // true
console.log('are-equal', areEqual(address1, { city: 'a', lastName: 'b' })); // false
console.log('are-same', areSame(address1, address2)); // false
console.log('are-same', areSame(address1, address3)); // true

function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// Mosh & Herri Solution are the same
function areSame(address1, address2) {
  return address1 === address2;
}

// MOSH'S SOLUTION
function areEqual(address1, address2) {
  return (
    address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode
  );
}

// // HERRI'S SOLUTION

// // solution-2
// function areEqual(address1, address2) {
//   let totalEqualProperty = 0;
//   for (let key in address1) if (key in address2) totalEqualProperty++;

//   return (
//     hasEqualPropertyLength(address1, address2) &&
//     Object.keys(address1).length === totalEqualProperty
//   );
// }

// // solution-1
// function areEqual(address1, address2) {
//   return (
//     hasEqualPropertyLength(address1, address2) &&
//     hasEqualPropertyKey(address1, address2)
//   );
// }

// function hasEqualPropertyLength(address1, address2) {
//   const address1Length = Object.keys(address1).length;
//   const address2Length = Object.keys(address2).length;
//   return address1Length === address2Length;
// }

// function hasEqualPropertyKey(address1, address2) {
//   let totalEqualProperty = 0;
//   for (let keyInAddress1 in address1)
//     for (let keyInAddress2 in address2)
//       if (keyInAddress1 === keyInAddress2) {
//         totalEqualProperty++;
//         break;
//       }

//   return totalEqualProperty === Object.keys(address1).length;
// }
