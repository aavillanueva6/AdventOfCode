const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

console.log(input);

// part 1
let score = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i][2] === 'X') {
    score += 1;
    if (input[i][0] === 'C') score += 6;
    else if (input[i][0] === 'A') score += 3;
  } else if (input[i][2] === 'Y') {
    score += 2;
    if (input[i][0] === 'A') score += 6;
    else if (input[i][0] === 'B') score += 3;
  } else if (input[i][2] === 'Z') {
    score += 3;
    if (input[i][0] === 'B') score += 6;
    else if (input[i][0] === 'C') score += 3;
  }
}
console.log(score);

// part 2
score = 0;
for (let i = 0; i < input.length; i++) {
  if (input[i][2] === 'X') {
    if (input[i][0] === 'A') {
      score += 3;
    } else if (input[i][0] === 'B') {
      score += 1;
    } else {
      score += 2;
    }
  } else if (input[i][2] === 'Y') {
    score += 3;
    if (input[i][0] === 'A') {
      score += 1;
    } else if (input[i][0] === 'B') {
      score += 2;
    } else {
      score += 3;
    }
  } else if (input[i][2] === 'Z') {
    score += 6;
    if (input[i][0] === 'A') {
      score += 2;
    } else if (input[i][0] === 'B') {
      score += 3;
    } else {
      score += 1;
    }
  }
}

console.log(score);
