#!/usr/bin/node

exports.callMeMoby = function (x, myFunction) {
  for (let i = 1; i <= x; i++) {
    myFunction();
  }
};