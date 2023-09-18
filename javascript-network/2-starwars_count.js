#!/usr/bin/node

// import request
const request = require('request');


// pass cmd line argument
const url = process.argv[2];
const parts = [];

// make a GET request
request.get(url, {encoding: 'utf-8'})
.on('data', (data) => {
    parts.push(data);
})
.on('complete', () => {
    const resp = JSON.parse(parts);
    let num_films = 0;
    resp.results.forEach(function (actor) {
       actor.characters.forEach((act) => {
        if (act.includes('https://swapi-api.alx-tools.com/api/people/18')){
            num_films++;
        }
       })
    }) 
    console.log(num_films);
})
