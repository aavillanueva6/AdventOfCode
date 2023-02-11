const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// // Test Data
// input = fs.readFileSync('./testData.txt', 'utf8').split('\n');

console.log(input);

let inputSplit = [];
input.forEach((element) => {
  element = element.split(' ');
  inputSplit.push(element);
});
console.log(inputSplit);

// part 1
let travelStack = [0];
let sizeStack = [];
let tempSize = 0;

for (let i = 1; i < inputSplit.length; i++) {
  if (inputSplit[i][1] === 'cd' && inputSplit[i][2] !== '..') {
    travelStack.push(0);
  } else if (inputSplit[i][0] !== 'dir' && inputSplit[i][0] !== '$') {
    tempSize = parseInt(inputSplit[i][0]);
    travelStack[travelStack.length - 1] += tempSize;
  } else if (inputSplit[i][1] === 'cd' && inputSplit[i][2] === '..') {
    tempSize = travelStack.pop();
    sizeStack.push(tempSize);
    travelStack[travelStack.length - 1] += tempSize;
  }
}

let iterationsRequired = travelStack.length;
for (let i = 0; i < iterationsRequired; i++) {
  tempSize = travelStack.pop();
  sizeStack.push(tempSize);
  travelStack[travelStack.length - 1] += tempSize;
}

let answer = 0;
for (let i = 0; i < sizeStack.length; i++) {
  if (sizeStack[i] <= 100000) {
    answer += sizeStack[i];
  }
}
console.log(answer);

// part 2
sizeStack = sizeStack.sort((a, b) => b - a);

let totalFileSystemSize = 70000000;
let totalSpaceRequired = 30000000;

let targetDirSize = totalSpaceRequired - (totalFileSystemSize - sizeStack[0]);

for (let i = 1; i < sizeStack.length; i++) {
  if (sizeStack[i] < targetDirSize) {
    console.log(sizeStack[i - 1]);
    break;
  }
}
