// use FOR-IN to iterate over the properties of an OBJECT
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person) console.log(key, person[key]);

// for-in is NOT IDEAL for ARRAY
const colors = ['red', 'green', 'blue'];
for (let index in colors) console.log(index, colors[index]);

// FOR-OF is IDEAL for ARRAY (start from ECMASCRIPT 6/ ES6)
// use FOR-OF loop to iterate over elements / items in the ARRAY
for (let color of colors) console.log(color);
