function getDivisorsCount(number = 1) {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!");
  }
  else {
    let result = 0;
    for (let i = number; i > 0; i--) {
      const isDivider = number % i === 0;
      if (isDivider)
        result++;
    }

    return result;
  }
}

console.log("getDivisorsCount(30)", getDivisorsCount(30));
console.log("getDivisorsCount(20)", getDivisorsCount(20));
console.log("getDivisorsCount(10)", getDivisorsCount(10));
console.log("getDivisorsCount(5)", getDivisorsCount(5));