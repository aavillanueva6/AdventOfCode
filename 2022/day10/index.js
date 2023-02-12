const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8').split('\n');

//test cases
// input = fs.readFileSync('./testData.txt', 'utf8').split('\n'); // 0
// input = fs.readFileSync('./testDataLg.txt', 'utf8').split('\n'); // 13140
/* part 2 output for testDataLg
##..##..##..##..##..##..##..##..##..##..
###...###...###...###...###...###...###.
####....####....####....####....####....
#####.....#####.....#####.....#####.....
######......######......######......####
#######.......#######.......#######.....
 */

let parsedInput = [];
input.forEach((element) => {
  element = element.split(' ');
  parsedInput.push(element);
});
console.log(parsedInput);

// part 1

let X = 1;
let cycle = 0;
let sum = 0;

function executeCycle() {
  cycle++;
  if ((cycle + 20) % 40 === 0) {
    sum += cycle * X;
  }
}

for (let i = 0; i < parsedInput.length; i++) {
  if (parsedInput[i][0] === 'noop') {
    executeCycle();
  } else {
    executeCycle();
    executeCycle();
    X += parseInt(parsedInput[i][1]);
  }
}
console.log(sum);

// part 2
let string = '';
let spritePos = 1;
cycle = 0;
let pixel = 0;

function executeCyclePt2() {
  cycle++;
  pixel++;
  if ((cycle - 1) % 40 === 0 && cycle > 2) {
    console.log(string);
    string = '';
    pixel = 0;
  }
  printPixel();
}

function printPixel() {
  if (
    pixel === spritePos - 1 ||
    pixel === spritePos ||
    pixel === spritePos + 1
  ) {
    string += '#';
  } else {
    string += '.';
  }
}

for (let i = 0; i < parsedInput.length; i++) {
  if (parsedInput[i][0] === 'noop') {
    executeCyclePt2();
  } else {
    executeCyclePt2();
    executeCyclePt2();
    spritePos += parseInt(parsedInput[i][1]);
  }
}
console.log(string);
