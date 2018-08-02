let name = 'Mosh';
let age = 30;

// {} -> it's called "Object Literal"
let person = {
  name: 'Mosh',
  age: 30
};

console.log(person);

// there are TWO WAYS to change the name

// 1. Dot Notation
person.name = 'John';

// 2. Bracket Notation
// 'name' or "name" -> single code is more common
person['name'] = 'John';

console.log(person.name);

// question: which one to use, dot notation or bracket notation ?
// dot notation SHOULD BE YOUR DEFAULT CHOICE

// bracket notation has it's own uses. when you don't know the name of the target property until the runtime
let selection = 'name';
person[selection] = 'John';
