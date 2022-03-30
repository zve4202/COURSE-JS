// Задание 1
console.log("задание 1");

const myName = "Вячеслав";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилена Минина";
const reasonText = "хочу сменить род деятельности";
const numberOfMonth = 2;

const resultInfo = `Всем привет! Меня зовут, ${myName}. 
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. 
Я уверен, что пройду данный курс до конца!`;

console.log(resultInfo);

// Задание 2
console.log("задание 2");
let myInfoText = resultInfo;

myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase());
console.log("myInfoText", myInfoText);
console.log("Length", myInfoText.length);
console.log("First char", myInfoText[0]);
console.log("Last char", myInfoText[myInfoText.length - 1]);

// Задание 3
console.log("задание 3 - Propt");

let userName = prompt("Как вас зовут?");
userName = userName.toUpperCase().trim();

alert(`Вас зовут ${userName}`);
