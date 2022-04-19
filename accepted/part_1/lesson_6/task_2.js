
// Задание 2
console.log("задание 2 - Тест для учеников начальных классов");

const question1 = "Сколько будет 2 + 2?";
const answer1 = 4;

const question2 = "Сколько будет 2 * 2?";
const answer2 = 4;

const question3 = "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?";
const answer3 = 1;

const question4 =
  "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?";
const answer4 = 12;

const question5 = "Сколько будет 2 + 2 * 2?";
const answer5 = 6;

let correctAnswers = 0;
let incorrectAnswers = 0;

const userAnswer1 = prompt(question1);
if (Number(userAnswer1) === answer1) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const userAnswer2 = prompt(question2);
if (Number(userAnswer2) === answer2) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const userAnswer3 = prompt(question3);
if (Number(userAnswer3) === answer3) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const userAnswer4 = prompt(question4);
if (Number(userAnswer4) === answer4) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const userAnswer5 = prompt(question5);
if (Number(userAnswer5) === answer5) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

alert(
  `Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`
);