#!/usr/bin/node
/* A function that increment and calls a function 
*/

exports.addMeMaybe = function (number, theFunction) {
  number = number + 1;
  theFunction(number);
};

