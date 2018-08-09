// for
// while
// do-while

// for-in
const person = {
  name: 'Mosh',
  age: 30
};

for (let key in person) console.log(key, person[key]);
// Dot Notation = person.name;
// Bracket Notation = person['name'];

// for-in is NOT IDEAL for ARRAY
// for-of is IDEAL for ARRAY (since ECMASCRIPT 6)
const colors = ['red', 'green', 'blue'];
for (let index in colors) console.log(index, colors[index]);
