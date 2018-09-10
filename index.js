// Herri's Solution

// // Factory Function
// function getAddress() {
//   return {
//     street: 'a',
//     city: 'b',
//     zipCode: 'c'
//   };
// }

// // Constructor Function
// function Address() {
//   this.street = 'a';
//   this.city = 'b';
//   this.zipCode = 'c';
// }

// function showAddress(address) {
//   for (let key in address) console.log(key, address[key]);
// }

// const address = getAddress();
// showAddress(address);

// const anotherAddress = new Address();
// showAddress(anotherAddress);

// Mosh's Solution

const address = createAddress('a', 'b', 'c');
console.log(address);

const anotherAddress = new Address('a', 'b', 'c');
console.log(anotherAddress);

// Factory Function
function createAddress(street, city, zipCode) {
  return {
    street,
    city,
    zipCode
  };
}

// Constructor Function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}
