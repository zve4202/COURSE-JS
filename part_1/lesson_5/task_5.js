
// Задание 5
console.log("задание 5 - Slice");

const userString = prompt("Введите текст для обрезки").trim();
console.log("userString", userString);
const startSliceIndex = Number(
  prompt("Введите индекс, с которого нужно начать обрезку строки").trim()
);
console.log("startSliceIndex", startSliceIndex);
const endSliceIndex = Number(
  prompt("Введите индекс, которым нужно закончить обрезку строки").trim()
);
console.log("endSliceIndex", endSliceIndex);
const stringResult = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${stringResult}`);