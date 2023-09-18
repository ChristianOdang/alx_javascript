#!/usr/bin/node

/*
Changing DOM with closure
*/

function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  const body = document.body;

  //Add paragraph to body
  const para1 = document.createElement("p");
  const para1Text = document.createTextNode("Welcome Holberton!");
  para1.appendChild(para1Text);
  body.appendChild(para1);

  //Add button to body
  const btn1 = document.createElement("button");
  const btn1Text = document.createTextNode("Spooky");
  btn1.appendChild(btn1Text);
  body.appendChild(btn1);
  btn1.addEventListener("click", function () {
    spooky();
  });

  //Add button to body
  const btn2 = document.createElement("button");
  const btn2Text = document.createTextNode("Dark mode");
  btn2.appendChild(btn2Text);
  body.appendChild(btn2);
  btn2.addEventListener("click", function () {
    darkMode();
  });

  //Add button to body
  const btn3 = document.createElement("button");
  const btn3Text = document.createTextNode("Scream mode");
  btn3.appendChild(btn3Text);
  body.appendChild(btn3);
  btn3.addEventListener("click", function () {
    screamMode();
  });
}
main();
