const fs = require('fs');
let input = fs.readFileSync('./input.txt', 'utf8');

console.log(input);

// part 1
for (let i = 0, j = 1, k = 2, l = 3; i < input.length - 3; i++, j++, k++, l++) {
  if (
    input[i] === input[j] ||
    input[i] === input[k] ||
    input[i] === input[l] ||
    input[j] === input[k] ||
    input[j] === input[l] ||
    input[k] === input[l]
  ) {
    continue;
  } else {
    console.log(l + 1);
    break;
  }
}

// part 2

// testData
// input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'; //19
// input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'; //23
// input = 'nppdvjthqldpwncqszvftbrmjlhg'; //23
// input = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'; //29
// input = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'; //26
let j = 0;
let hashMap = new Map();
for (let i = 0; i < input.length; i++) {
  if (!hashMap.has(input[i])) {
    hashMap.set(input[i], 1);
  } else {
    hashMap.set(input[i], hashMap.get(input[i]) + 1);
  }

  if (i > 13) {
    j = i - 14;
    hashMap.set(input[j], hashMap.get(input[j]) - 1);
    if (hashMap.get(input[j]) === 0) {
      hashMap.delete(input[j]);
    }
  }
  if (hashMap.size === 14) {
    console.log(i + 1);
    break;
  }
}
