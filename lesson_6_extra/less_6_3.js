// Урок 6, задание 3

const testPass = prompt("Введите пароль");
const errorMessage = "Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.";
const validMessage = "Пароль валидный. Добро пожаловать в аккаунт!";

if (testPass.length < 3 || testPass.length > 20) {
  alert(errorMessage);
} else {
  let hasBigChars = false;
  let hasNumbers = false;
  for (let i = 0; i < testPass.length; i += 1) {
    const currChar = testPass[i];
    console.log(currChar);
    const charAsNum = Number(currChar);
    console.log(charAsNum);

    // const isNumber = charAsNum && typeof charAsNum === "number"; не работает по charAsNum === 0
    const isNumber =  (charAsNum || charAsNum === 0) && typeof charAsNum === "number";    
    console.log("isNumber =", isNumber);

    if (isNumber) {
      hasNumbers = true;
    } else if (currChar === currChar.toUpperCase() && !isNumber) {
      console.log("Big");
      hasBigChars = true;
    }
  }

  if (!hasBigChars || !hasNumbers) {
    alert(errorMessage);
  } else {
    alert(validMessage);
  }
}