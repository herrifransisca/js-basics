// 1        is Decimal Number
// 00000000 is Binary Number
// search google with keyword "convert binary to decimal"

// 1 = 00000001
// 2 = 00000010

// 3 = 00000011
// 0 = 00000000

// 1 | 2
// result: 00000011 = 3
// how the result return 11 (last two digits),
//    herri note/thinking:
//       0 is false, 1 is true
//       so -> 0 || 1 = true / 1
//             1 || 0 = true / 1
//             result = 11
console.log(1 | 2); // Bitwise OR -> returns 3 -> result = 00000011

// 1 & 2
// result: 00000000 = 0
// how the result return 00 (last two digits),
//    herri note/thinking:
//       0 is false, 1 is true
//       so -> 0 && 1 = false / 0
//             1 && 0 = false / 0
//             result = 00
console.log(1 & 2); // Bitwise AND -> returns 0 -> result = 00000000

// Real-world example:
//    Read, Write, Execute
//    00000100  -> Read Permission
//    00000010  -> Write Permission
//    00000001  -> Execute Permission
const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

let message = myPermission & readPermission ? 'yes' : 'no';
console.log(message); // yes

message = myPermission & executePermission ? 'yes' : 'no';
console.log(message); // no

// Take Away:
// with Bitwise OR operator, we could ADD PERMISSIONS
// with Bitwise AND operator, we can CHECK TO SEE IF we have given permission
