#!/usr/bin/node
/*
A JavaScript file that prints 3 lines using 
an array of a string and a loop 
*/

const c_str = "C is fun";
const py_str = "Python is cool";
const js_str = "JavaScript is amazing";

const programming_languages = [c_str, py_str, js_str];

for (let i = 0; i < 3; i++) {
  console.log(programming_languages[i]);
}