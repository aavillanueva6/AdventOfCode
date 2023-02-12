const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// input = ['R 4', 'U 4', 'L 3', 'D 1', 'R 4', 'D 1', 'L 5', 'R 2']; // 13

let parsedInput = [];
input.forEach((element) => {
  element = element.split(' ');
  parsedInput.push(element);
});
console.log(parsedInput);

// part 1
let tSet = new Set();
let hLoc = [0, 0];
let tLoc = [0, 0];
tSet.add(`${tLoc[0]},${tLoc[1]}`);
let dist = 0;
function moveT() {
  if (hLoc[0] === tLoc[0]) {
    if (hLoc[1] > tLoc[1]) tLoc[1] = tLoc[1] + 1;
    else tLoc[1] = tLoc[1] - 1;
  } else if (hLoc[1] === tLoc[1]) {
    if (hLoc[0] > tLoc[0]) tLoc[0] = tLoc[0] + 1;
    else tLoc[0] = tLoc[0] - 1;
  } else {
    if (hLoc[0] > tLoc[0] && hLoc[1] > tLoc[1]) {
      tLoc[0] = tLoc[0] + 1;
      tLoc[1] = tLoc[1] + 1;
    } else if (hLoc[0] < tLoc[0] && hLoc[1] < tLoc[1]) {
      tLoc[0] = tLoc[0] - 1;
      tLoc[1] = tLoc[1] - 1;
    } else if (hLoc[0] > tLoc[0]) {
      tLoc[0] = tLoc[0] + 1;
      tLoc[1] = tLoc[1] - 1;
    } else {
      tLoc[0] = tLoc[0] - 1;
      tLoc[1] = tLoc[1] + 1;
    }
  }
}

for (let i = 0; i < parsedInput.length; i++) {
  for (let j = 0; j < parseInt(parsedInput[i][1]); j++) {
    if (parsedInput[i][0] === 'R') {
      hLoc[0] = hLoc[0] + 1;
    } else if (parsedInput[i][0] === 'L') {
      hLoc[0] = hLoc[0] - 1;
    } else if (parsedInput[i][0] === 'U') {
      hLoc[1] = hLoc[1] + 1;
    } else {
      hLoc[1] = hLoc[1] - 1;
    }
    dist = Math.sqrt(
      (hLoc[0] - tLoc[0]) * (hLoc[0] - tLoc[0]) +
        (hLoc[1] - tLoc[1]) * (hLoc[1] - tLoc[1])
    );
    if (dist > 1.5) {
      moveT();
      tSet.add(`${tLoc[0]},${tLoc[1]}`);
    }
  }
}

console.log(tSet.size);

// part 2
let nineSet = new Set();
