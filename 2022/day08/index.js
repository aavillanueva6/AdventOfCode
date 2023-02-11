const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

// testData
// input = ['30373', '25512', '65332', '33549', '35390']; //21, 8

console.log(input);

// part 1
let length = input.length;
let width = input[0].length;
let count = length * 2 + (width - 2) * 2;

let tempHeight = -1;

for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input.length - 1; j++) {
    let LV = 1;
    let RV = 1;
    let UV = 1;
    let DV = 1;

    tempHeight = parseInt(input[i][j]);
    //look left
    for (let k = j - 1; k >= 0; k--) {
      if (parseInt(input[i][k]) >= tempHeight) {
        LV = 0;
        break;
      }
    }
    //look right
    for (let k = j + 1; k < input.length; k++) {
      if (parseInt(input[i][k]) >= tempHeight) {
        RV = 0;
        break;
      }
    }
    //look up
    for (let k = i - 1; k >= 0; k--) {
      if (parseInt(input[k][j]) >= tempHeight) {
        UV = 0;
        break;
      }
    }
    //look down
    for (let k = i + 1; k < input.length; k++) {
      if (parseInt(input[k][j]) >= tempHeight) {
        DV = 0;
        break;
      }
    }
    if (LV + RV + UV + DV > 0) count++;
  }
}
console.log(count);

// part 2
let maxScore = 0;
let tempScore = 0;
for (let i = 1; i < input.length - 1; i++) {
  for (let j = 1; j < input.length - 1; j++) {
    let LS = 0;
    let RS = 0;
    let US = 0;
    let DS = 0;
    tempHeight = parseInt(input[i][j]);

    //look left
    for (let k = j - 1; k >= 0; k--) {
      LS++;
      if (parseInt(input[i][k]) >= tempHeight) {
        break;
      }
    }
    //look right
    for (let k = j + 1; k < input.length; k++) {
      RS++;
      if (parseInt(input[i][k]) >= tempHeight) {
        break;
      }
    }
    //look up
    for (let k = i - 1; k >= 0; k--) {
      US++;
      if (parseInt(input[k][j]) >= tempHeight) {
        break;
      }
    }
    //look down
    for (let k = i + 1; k < input.length; k++) {
      DS++;
      if (parseInt(input[k][j]) >= tempHeight) {
        break;
      }
    }
    // find tree score
    tempScore = LS * RS * US * DS;
    if (tempScore > maxScore) maxScore = tempScore;
  }
}
console.log(maxScore);
