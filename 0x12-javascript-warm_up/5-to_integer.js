#!/usr/bin/node
// console.log(parseInt(process.argv[2]));
if (isNaN(parseInt(process.argv[2]))) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parseInt(process.argv[2])}`);
}
