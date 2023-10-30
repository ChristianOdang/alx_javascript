#!/usr/bin/node
const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) =>{
    if(!error && response.statusCode == 200){
        const films = JSON.parse(body);
        let counter = 0;
        films.results.forEach((film) =>{
            film.characters.forEach((actor) => {
                const split_film = actor.split('/');
                if(split_film[split_film.length-2] == 18) {
                    counter += 1;
                }
            })
        })
        console.log(counter);
    }
});
