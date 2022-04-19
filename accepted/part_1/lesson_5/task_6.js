
// Задание 6
console.log("задание 6 - Slice");

const userText = prompt("Введите текст").trim();
console.log("userText", userText);

const wordFromText = prompt("Введите слово из текста").trim();
console.log("wordFromText", wordFromText);

const indexOfWord = userText.indexOf(wordFromText);
console.log("indexOfWord", indexOfWord);

const stringResult = userText.slice(0, indexOfWord);

alert(`Результат: ${stringResult}`);