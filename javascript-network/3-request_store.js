#!/usr/bin/node

/*
 a script that gets the contents of a webpage and stores it in a file.
*/

//import modules
const request = require ('request');
const fs = require ('fs');

//argumets on command line
url = process.argv[2];
file_name = process.argv[3];

//make request
request.get(url).pipe(fs.createWriteStream(file_name));
