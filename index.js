// i is only accessible in for loop scope
for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// i is different with i above even it has the same name (because in different scope)
let i = 0;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}
