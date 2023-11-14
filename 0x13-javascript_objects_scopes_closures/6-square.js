#!/usr/bin/node
// Previous rectangle class with additional methods

const Rectangle = require('./5-square');
module.exports = class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        if (c == null) {
          row += 'X';
        } else {
          row += 'X';
        }
      }
      console.log(row);
    }
  }
};
