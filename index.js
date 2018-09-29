// The total interest we have to pay is 1750
function interest(principal, rate, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 3.5, 5)); // 1750

// 	Truthy -> we can use the logical "or operator" to give a variable the default value
function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return ((principal * rate) / 100) * years;
}

console.log(interest(10000)); // 1750

// Starting from ES6 we have A CLEANER WAY to achieve the same thing.
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000)); // 1750

// Starting from ES6 we have A CLEANER WAY to achieve the same thing.
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000)); // 1750

// ONE CAVEAT here, SHOULD ALSO GIVE all the "other parameters after that" a default value
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000)); // NaN

// We get "NaN", because rate = 5, years = undefined
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 5)); // NaN

// here's a TRICK around this, we can pass "undefined"
// REALLY UGLY
function interest(principal, rate = 3.5, years) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, undefined, 5)); // 1750

/*
  So AS BEST PRACTICE, whenever you want to give a function parameter of default value, 
    - MAKE SURE "that parameter" is the "last parameter in the list" 
*/
function interest(principal, years, rate = 3.5) {
  return ((principal * rate) / 100) * years;
}

//  - or "GIVE all the parameters after that", "a default value"
function interest(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000, 5)); // 1750
