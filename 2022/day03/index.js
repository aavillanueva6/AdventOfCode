const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// part 1
let set1 = new Set();
let set2 = new Set();
let answer = 0;
for (let i = 0; i < input.length; i++) {
  for (let j = 0, k = input[i].length / 2; j < input[i].length / 2; j++, k++) {
    set1.add(input[i][j]);
    set2.add(input[i][k]);
  }
  set1.forEach((value) => {
    if (set2.has(value)) {
      if (value.charCodeAt(0) < 91) {
        answer += value.charCodeAt(0) - 38;
      } else {
        answer += value.charCodeAt(0) - 96;
      }
    }
  });
  set1.clear();
  set2.clear();
}

console.log(answer);

// part 2
let set3 = new Set();
let set4 = new Set();
let set5 = new Set();
let set6 = new Set();
answer = 0;
for (let i = 0; i < input.length - 2; i += 3) {
  for (let j = 0; j < input[i].length; j++) {
    set1.add(input[i][j]);
  }
  for (let j = 0; j < input[i + 1].length; j++) {
    set2.add(input[i + 1][j]);
  }
  for (let j = 0; j < input[i + 2].length; j++) {
    set3.add(input[i + 2][j]);
  }

  set1.forEach((value) => {
    if (set2.has(value) && set3.has(value)) {
      if (value.charCodeAt(0) < 91) {
        answer += value.charCodeAt(0) - 38;
      } else {
        answer += value.charCodeAt(0) - 96;
      }
    }
  });

  set1.clear();
  set2.clear();
  set3.clear();
}

console.log(answer);
