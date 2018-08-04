// 3 TYPES:

// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true); // true
console.log(false && true); // false
// real world example:
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan); // true

// Logical OR (||)
// Returns TRUE if one of operands is TRUE
// real world example:
highIncome = false;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan); // true

// NOT (!)
// real world example:
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible', eligibleForLoan); // false
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);
