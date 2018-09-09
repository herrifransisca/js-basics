const now = new Date();
const date1 = new Date('May 11 2018 09:00');
const date2 = new Date(2018, 4, 11, 9);

now.getDate();
now.setFullYear(2017);

console.log(now.toDateString()); // Sat Sep 09 2017
console.log(now.toTimeString()); // 20:10:29 GMT+0700 (Western Indonesia Time)
console.log(now.toISOString()); // 2017-09-09T13:10:29.716Z
