#!/usr/bin/node
exports.esrever = function (list) {
  let start = 0;
  let end = list.length - 1;
  let temp = 0;
  while (start < end) {
    temp = list[start];
    list[start] = list[end];
    list[end] = temp;

    start++;
    end--;
  }
  return list;
};
