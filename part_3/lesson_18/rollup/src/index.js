//console.log("Hello World!");
import "../index.css";
import imageJS from "../assets/js.png";

const titleHTML = document.createElement("h1");
titleHTML.textContent = "I love JavaScript";

const imageHTML = document.createElement("img");
imageHTML.src = imageJS;

document.body.append(titleHTML, imageHTML);