#!/usr/bin/node

const url = process.argv[2];

const request = require('request');

request.get(url, (error, response, body) => {
    const todos = JSON.parse(body);
    let completed_task = {}
    if(!error && response.statusCode == 200) {
        todos.forEach((todo) => {
            if (todo.completed && completed_task[todo.userId] === undefined) {
                completed_task[todo.userId]  = 1;
            }else if(todo.completed){
                completed_task[todo.userId] += 1;
            }
        })
    }
    console.log(completed_task)
});
