const fs = require('fs');
let input = fs.readFileSync('./steps.txt', 'utf8').split('\n');

console.log(input);

let steps = [];
input.forEach((element) => {
  element = element.split(' ');
  steps.push(element);
});

console.log(steps);

let crates = [
  [],
  ['D', 'B', 'J', 'V'],
  ['P', 'V', 'B', 'W', 'R', 'D', 'F'],
  ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'],
  ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'],
  ['H', 'N', 'B', 'P', 'C', 'S', 'Q'],
  ['R', 'D', 'B', 'S', 'N', 'G'],
  ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'],
  ['W', 'L', 'F'],
  ['S', 'V', 'F', 'M', 'R'],
];

// part 1
for (let i = 0; i < steps.length; i++) {
  for (let j = 0; j < steps[i][1]; j++) {
    crates[steps[i][5]].push(crates[steps[i][3]].pop());
  }
}
let topCrates = '';
for (let i = 1; i < crates.length; i++) {
  topCrates += crates[i].pop();
}
console.log(topCrates);

// part 2
crates = [
  [],
  ['D', 'B', 'J', 'V'],
  ['P', 'V', 'B', 'W', 'R', 'D', 'F'],
  ['R', 'G', 'F', 'L', 'D', 'C', 'W', 'Q'],
  ['W', 'J', 'P', 'M', 'L', 'N', 'D', 'B'],
  ['H', 'N', 'B', 'P', 'C', 'S', 'Q'],
  ['R', 'D', 'B', 'S', 'N', 'G'],
  ['Z', 'B', 'P', 'M', 'Q', 'F', 'S', 'H'],
  ['W', 'L', 'F'],
  ['S', 'V', 'F', 'M', 'R'],
];

let tempArr = [];
let pickCount = 0;
for (let i = 0; i < steps.length; i++) {
  pickCount = steps[i][1];

  tempArr = crates[steps[i][3]].splice(crates[steps[i][3]].length - pickCount);

  crates[steps[i][5]] = crates[steps[i][5]].concat(tempArr);
}

topCrates = '';
for (let i = 1; i < crates.length; i++) {
  topCrates += crates[i].pop();
}
console.log(topCrates);
