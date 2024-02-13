#!/usr/bin/node
const args = process.argv;
const  num1 = args[2];
const num2= args[3];

function add(a,b) {
  console.log(a + b);
}
add(num1,num2);
