const getSumOfNumbers = (number, type = "odd") => {
  let result = 0;
  for (let i = 0; i <= number; i += 1) {
    const isEven = i % 2 === 0;
    const isOdd = !isEven;
    switch (type) {
      case "odd":
        result += isOdd ? i : 0;
        break;
      case "even":
        result += isEven ? i : 0;
        break;
      default:
        result += i;
    }
/*
    или
    if (!type) {
      result += i;
    } else if (isEven && type === "even") {
      result += i;
    } else if (isOdd && type === "odd") {
      result += i;
    }
*/    
  }
  return result;
};

console.log("type = 'odd'", getSumOfNumbers(10));

console.log("type = 'even'", getSumOfNumbers(10, "even"));

console.log("type = ''", getSumOfNumbers(10, ''));
