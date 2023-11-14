#!/usr/bin/node
// a script that prints the addition of 2 integers

if (process.argv[2] === undefined || process.argv[3] === undefined) {
  console.log('NaN');
} else {
  function add (a, b) {
    const sum = parseInt(a) + parseInt(b);
    return sum;
  }
  console.log(add(process.argv[2], process.argv[3]));
}
