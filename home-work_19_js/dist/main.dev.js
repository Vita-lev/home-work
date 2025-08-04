"use strict";

function task01() {
  var a = 0.1;
  var b = 0.2;
  var res = a + b;
  console.log("Задача1, відповідь: " + res);
  document.querySelector(".out01").innerHTML = res;
}

task01();

function task02() {
  var a = "1";
  var b = 2;
  var res = a + b;
  console.log("Задача2, відповідь: " + res);
  document.querySelector(".out02").innerHTML = res;
}

task02();

function task03() {
  var a = document.querySelector(".inp01").value * 1000;
  var b = 820;
  var res = Math.round(a / b);
  var res2 = a % b;
  console.log("Задача3, відповідь: " + res + " файлів");
  console.log("Залишок: " + res2 + " mb");
  document.querySelector(".out04").innerHTML = res2;
  document.querySelector(".out03").innerHTML = res;
}

document.querySelector(".btn01").onclick = task03;

function task04() {
  var a = document.querySelector(".inp02").value;
  var b = document.querySelector(".inp03").value;
  var res = Math.round(a / b);
  var res2 = a % b;
  console.log("Задача4, відповідь: " + res + " шоколадок");
  console.log("Здача: " + res2 + " гривень");
  document.querySelector(".out05").innerHTML = res;
  document.querySelector(".out06").innerHTML = res2;
}

document.querySelector(".btn02").onclick = task04;

function task05() {
  //   let x = prompt("Напиши розмір вкладу у гривні");
  //   let y = prompt("Напиши на який строк відкривати депозит у місяцях");
  var x = document.querySelector(".inp04").value;
  var y = document.querySelector(".inp05").value;
  var a = 0.05;
  var b = 12;
  var res = a / b;
  var res2 = res * y;
  var res3 = res2 * x;
  document.querySelector(".out07").innerHTML = y;
  document.querySelector(".out08").innerHTML = res3; //   console.log("Місячна ставка: " + res + " % на місяць");
  //   console.log("Прибуток складає: " + res2 + "% за " + y + " місяці");

  console.log("Через " + y + " місяці я отримаю: " + res3 + " гривень");
}

document.querySelector(".btn03").onclick = task05;
console.log(Boolean(2 && 0 && 3));
console.log(Boolean(2 || 0 || 3));
console.log(Boolean(2 && 0 || 3));