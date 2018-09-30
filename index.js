/*"value.split is not a function"
	because "split" is a method that belongs to "string"
	boolean don't have a "split method"
*/
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

person.fullName = true; // <- change string to boolean
console.log(person); // uncaught TypeError: value.split is not a function...

person.fullName = null; // <- change string to null
console.log(person); // uncaught TypeError: cannot read property 'split' of null...

// WE NEED TO ADD "ERROR HANDLING"
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') return;

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = null;
console.log(person);

/*
Sometimes we WANNA REPORT AN ERROR IN APPLICATION,
	That's where WE NEED TO THROW AN EXCEPTION.
*/
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = null;
console.log(person);

/*
	SOMEWHERE ELSE WE NEED TO CATCH THAT EXCEPTION.
  And QUITE OFTEN when we catch an exception, WE DISPLAY AN ERROR TO THE USER.
  try catch block
*/
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = null;
} catch (e) {
  alert(e);
}

console.log(person);

/*
Now let's TAKE IT TO THE NEXT LEVEL
	change null to '' (empty string)
	We DON’T GET ANY ERROR, but firstName = "" and lastName = undefined, IT'S NOT DESIRABLE.
	IDEALLY, we wanna make sure that the user is typing the first name and last name. 
*/
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = '';
} catch (e) {
  alert(e);
}

console.log(person);

// 	Check the length of this array (parts)
const person = {
  firstName: 'Mosh',
  lastName: 'Hamedani',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');

    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter a first and last name.');

    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

try {
  person.fullName = '';
} catch (e) {
  alert(e);
}

console.log(person);

/*
Basically when we throw an exception, 
	- the line after "throw statement" ARE NOT EXECUTED,
	- WILL JUMP OUT OF THIS METHOD     (  fullName()  )
	- and the control will move to the catch block.     (  catch (e) {}  )
	- Here we catch the exception and do something with it.     ( alert(e); )
This is the basic error handling in JavaScript
*/
