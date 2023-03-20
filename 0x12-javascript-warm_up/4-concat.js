#!/usr/bin/node
const t2 = typeof process.argv[2];
const t3 = typeof process.argv[3];
if (t2 !== 'undefined') {
  if (t3 !== 'undefined') {
    console.log(`${process.argv[2]} is ${process.argv[3]}`);
  } else {
    console.log(`${process.argv[2]} is ${t3}`);
  }
} else {
  console.log(`${t2} is ${t3}`);
}
