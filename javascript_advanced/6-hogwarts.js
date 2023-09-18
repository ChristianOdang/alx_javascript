#!/usr/bin/node

function studentHogwarts(privateScore = 0, name = null) {
  this.privateScore = privateScore;
  this.name = name;

  let changeScoreBy = function (points) {
    return (this.privateScore += points);
  }.bind(this);

  this.setName = function (newName) {
    this.name = newName;
  };

  this.rewardStudent = function () {
    changeScoreBy(1);
  };

  this.penalizeStudent = function () {
    changeScoreBy(-1);
  };

  this.getScore = function () {
    return `${this.name}: ${this.privateScore}`;
  };
}

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
