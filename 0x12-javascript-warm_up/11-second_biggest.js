#!/usr/bin/node
// find the second biggest number in the arguments.

if (process.argv.length <= 3) {
  console.log(0);
} else {
  const numbers = process.argv.slice(2).map(Number);
  const uniqueNumbers = Array.from(new Set(numbers));
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
  console.log(sortedNumbers[1]);
}
