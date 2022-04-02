const possibleMathSigns = [">", ">", "<", "=", "+", "-", "*", "/"];

console.log("result", getMathResult(["100", "hello", "javascript", , "help200", "+", 4]));
console.log("result2", getMathResult([2, "=", "4"]));

function getMathResult(expression) {
  const testExpression = [...expression].filter(
    //фильтруем только цифры и знаки
    (item) => !isNaN(item) || possibleMathSigns.includes(item)
  );
  
  const firstNum = Number(testExpression[0]);
  const secondNum = Number(testExpression[testExpression.length - 1]);
  const sign = testExpression[1];

  switch (sign) {
    case ">":
      return firstNum > secondNum;
    case "<":
      return firstNum < secondNum;
    case "=":
      return firstNum === secondNum;
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
    default:
      return "Ошибка";
  }
}


