/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

//window.onload = function() {
//write your code here
//console.log("Hello Rigo from the console!");
//};
//* eslint-disable *
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

let pronoun = ["A", "The"];
let subject = ["jogger", "racoon", "dog", "driver", "comedian"];
let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
let possetion = ["homework", "toe", "car", "shoe"];
let where = ["on the street", "in my house", "in my driveway"];
const getRandomElement = listElement => {
  let element = "";
  element = listElement[Math.floor(Math.random() * listElement.length)];
  console.log(Element);
  return element;
};

const onload = () => {
  let excuseGen = document.querySelector("#excuse");
  excuseGen.innerHTML =
    getRandomElement(pronoun) +
    " " +
    getRandomElement(subject) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(possetion) +
    " " +
    getRandomElement(where);
};
window.onload = onload();
