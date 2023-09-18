#!/usr/bin/node
/*  
Lexical scoping and welcome messages
*/

function welcome(firstName, lastName) {
  const fullName = firstName + ' ' + lastName;

  // a closure function
  function displayFullName() {
    alert('Welcome ' + fullName + '!')
  }
  displayFullName()
}
