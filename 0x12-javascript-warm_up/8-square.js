#!/usr/bin/node
const num = process.argv[2];
let s = '';
if (isNaN(parseInt(process.argv[2]))) {
  console.log('Missing size');
} else {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      s = s + 'X';
    }
    s += '\n';
  }
  console.log(s);
}
