const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// part 1
let max = 0;
let temp = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    temp += parseInt(input[i]);
  } else {
    if (temp > max) max = temp;
    temp = 0;
  }
}
console.log(max);

// part 2
temp = 0;
let summedArr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    temp += parseInt(input[i]);
  } else {
    summedArr.push(temp);
    temp = 0;
  }
}
summedArr.sort((a, b) => b - a);
console.log(summedArr[0] + summedArr[1] + summedArr[2]);
