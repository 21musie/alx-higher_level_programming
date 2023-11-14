#!/usr/bin/node
// finds the factorial of a number recursively and prints it.

function factorial (num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

if (process.argv[2] === undefined) {
  console.log('1');
} else {
  console.log(factorial(process.argv[2]));
}
