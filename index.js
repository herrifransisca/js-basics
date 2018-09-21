const numbers = [1, 2, 3];

for (let number of numbers) console.log(number);
// output:
// 1
// 2
// 3

numbers.forEach((number, index) => console.log(index, number));
// output:
// 0 1
// 1 2
// 2 3

for (let number in numbers) console.log(number, numbers[number]);
// output:
// 0 1
// 1 2
// 2 3
