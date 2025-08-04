"use strict";

var a = 6;
var b = "Hello";
console.log(a);
var inputIn = document.querySelector(".input-in"); // input

var button = document.querySelector("button"); //button

var div = document.querySelector(".out");

button.onclick = function () {
  // кнопка будет нажата
  console.log("работает!!!!");
  console.log(inputIn.value); // valuy - то, что введено в input

  var b = +inputIn.value; // + перевести в число!!!!!

  console.log(b + 10); //'66' +10 =6610

  inputIn.value = "";
  div.innerHTML = b;
};