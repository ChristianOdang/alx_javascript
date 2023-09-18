#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  try {
    // Parse the JSON response
    const todos = JSON.parse(body);

    // Filter completed tasks
    const completedTasks = todos.filter((todo) => todo.completed);

    // Create an object to store the count of completed tasks for each user ID
    const userCompletedTasks = {};

    // Count completed tasks for each user
    completedTasks.forEach((task) => {
      const userId = task.userId;
      if (userCompletedTasks[userId]) {
        userCompletedTasks[userId]++;
      } else {
        userCompletedTasks[userId] = 1;
      }
    });

    // Print the results
    for (const userId in userCompletedTasks) {
    
      console.log(`{'${userId}': ${userCompletedTasks[userId]}}`);
    }
  } catch (e) {
    console.error('Error parsing JSON:', e);
  }
});
