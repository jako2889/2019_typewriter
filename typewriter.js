"use strict";

window.addEventListener("DOMContentLoaded", init);

// Global variables

// store/read the text from div

// declare counter

let Text = document.querySelector("#typewriter").textContent;

let counter = 0;

const space = document.querySelector("#typewriter").textContent.substring(4, 5);

const sound = new Audio("typekey1.mp3");
const soundspace = new Audio("typespace.mp3");

const button = document.querySelector("#button");
const reset = document.querySelector("#reset");

console.log(Text + counter);

// init -------- function

function init() {
  // reset counter

  counter = 0;

  // start loop

  // remove text from div
  document.querySelector("#typewriter").textContent = "";

  console.log(Text);
  button.addEventListener("click", loop);
  reset.addEventListener("click", reload);
}

// reset page
function reload() {
  location.reload();
}

//loop find text from 0 to counter ----- function

function loop() {
  // display textpart in html
  const part = Text.substring(0, counter + 1);

  // counter++
  counter++;
  console.log(counter);

  document.querySelector("#typewriter").textContent = part;

  // if text.length > counter = loop
  if (part == space) {
    soundspace.play();
    console.log("soundspace");
  } else {
    sound.play();
    console.log("sound");
  }

  // set timeout / delay / 400ms
  if (Text.length > counter) {
    setTimeout(loop, 400);
  } else {
    setTimeout(init, 1000);
  }
}

//----------------------------------------------
