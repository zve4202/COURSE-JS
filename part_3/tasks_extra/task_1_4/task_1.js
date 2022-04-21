let maxNum = 0;

for (n = 1016; n <= 1937; n++) {
  const isValid = n % 3 == 0 && n % 7 == 0 && n % 5 !== 0 && n % 2 !== 0;
  if (isValid) {
    maxNum = Math.max(maxNum, n);
  }
}

console.log(maxNum);