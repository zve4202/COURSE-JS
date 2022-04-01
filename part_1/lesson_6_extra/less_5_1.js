// Урок 5, задание 1

let javaScriptDescription =
  "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

const middlePos = Math.floor(javaScriptDescription.length / 2);
console.log("middlePos", middlePos);
javaScriptDescription = javaScriptDescription.slice(0, middlePos);
javaScriptDescription = javaScriptDescription.replaceAll('a','A').replaceAll(' ', '').repeat(3);

const newMiddlePos = Math.floor(javaScriptDescription.length / 2);
console.log("newMiddlePos", newMiddlePos);

console.log(`char in newMiddlePos: "${javaScriptDescription[newMiddlePos]}"`);
console.log("new javaScriptDescription:", javaScriptDescription);
