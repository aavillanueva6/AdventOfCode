const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');
console.log(input);

let count = 0;
let pairs = [];
let pair;
input.forEach((value) => {
  pair = value.split(',');
  pair[0] = pair[0].split('-');
  pair[1] = pair[1].split('-');
  pairs.push(pair);
});

let p00 = 0;
let p01 = 0;
let p10 = 0;
let p11 = 0;

// part 1
for (let i = 0; i < pairs.length; i++) {
  p00 = parseInt(pairs[i][0][0]);
  p01 = parseInt(pairs[i][0][1]);
  p10 = parseInt(pairs[i][1][0]);
  p11 = parseInt(pairs[i][1][1]);

  if (p00 >= p10 && p00 <= p11 && p01 <= p11) {
    count++;
  } else if (p10 >= p00 && p10 <= p01 && p11 <= p01) {
    count++;
  }
}
console.log(count);

// part 2
count = 0;
for (let i = 0; i < pairs.length; i++) {
  p00 = parseInt(pairs[i][0][0]);
  p01 = parseInt(pairs[i][0][1]);
  p10 = parseInt(pairs[i][1][0]);
  p11 = parseInt(pairs[i][1][1]);
  if (p00 >= p10 && p00 <= p11) count++;
  else if (p01 >= p10 && p01 <= p11) count++;
  else if (p10 >= p00 && p10 <= p01) count++;
  else if (p11 >= p00 && p11 <= p01) count++;
}
console.log(count);
