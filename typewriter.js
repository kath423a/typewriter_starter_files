"use strict";
document.addEventListener("DOMContentLoaded", init);

//Opret variabler
let text;
let showText;
let htmlText = document.querySelector(".typewritten");
let i = 1;

function init() {
  console.log("init");

  //get the text from somewhere
  text = htmlText.textContent;

  //clear the HTML area
  htmlText.innerHTML = "";

  // start loop
  loop();
}

function loop() {
  console.log("loop");
  //show the N'th letter:
  // - set textContent to substring of 0 to N
  //wait before calling loop() again
  showText = text.substring(0, i);
  htmlText.textContent = showText;
  if (i < text.length) {
    i++;
    setTimeout(loop, 500);
  }
}
