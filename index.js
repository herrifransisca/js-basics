const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani'
};

console.log(person.firstName + ' ' + person.lastName);

// Better way: use TEMPLATE LITERAL
console.log(`${person.firstName} ${person.lastName}`);

// ADD METHOD to an OBJECT
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  }
};

console.log(person.fullName());

// It would be NICER if we could TREAT THIS AS A PROPERTY.
// use GETTER & SETTER
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // Mosh Hamedani

person.full = 'John Smith';
console.log(person);
