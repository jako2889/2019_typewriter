"use strict";

window.addEventListener("DOMContentLoaded", init);

// Global variables

// store/read the text from div

// declare counter

let Text = document.querySelector("#typewriter").textContent;

let counter = 0;

let sound = new Audio("typekey1.mp3");

console.log(Text + counter);

// init -------- function

function init() {
  // remove text from div

  // reset counter

  // start loop

  document.querySelector("#typewriter").textContent = "";

  console.log(Text);
  loop();
}

function loop() {
  const part = Text.substring(0, counter + 1);
  counter++;
  console.log(counter);

  document.querySelector("#typewriter").textContent = part;
  sound.play();

  if (Text.length > counter) {
    setTimeout(loop, 400);
  }
}

//----------------------------------------------

//loop find text from 0 to counter ----- function

// display textpart in html

// counter++

// if text.length > counter = loop

// set timeout / delay / 400ms
