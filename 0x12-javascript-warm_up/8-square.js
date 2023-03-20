#!/usr/bin/node
const num = process.argv[2];

if (isNaN(parseInt(process.argv[2]))) {
  console.log('Missing size');
} else {
  for (let i = 0; i < num; i++) {
    let s = '';
    for (let j = 0; j < num; j++) {
      s = s + 'X';
    }
    // s += '\n';
    console.log(s);
  }
}
