/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pajaro"];
  let action = ["comio", "orino", "aplasto", "rompio"];
  let what = ["mi  deber", "las llaves", "el carro"];
  let when = [
    "antes de clases",
    "justo a tiempo",
    "cuando termine",
    "durante mi almuerzo",
    "mientras estaba rezando"
  ];

  let whoIndex = Math.floor(Math.random() * 3);
  let actionIndex = Math.floor(Math.random() * 3);
  let whatIndex = Math.floor(Math.random() * 3);
  let whenIndex = Math.floor(Math.random() * 4);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};
