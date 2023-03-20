#!/usr/bin/node
const n = process.argv[2];
if (typeof process.argv[2] === 'undefined') {
  console.log('Missing number of occurrences');
}
for (let i = 0; i < n; i++) {
  console.log('C is fun');
}
