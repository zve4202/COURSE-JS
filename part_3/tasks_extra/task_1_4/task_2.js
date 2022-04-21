console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

function isEqualSymbols(str1, str2) {
  // Your code here ...
  if (str1.length !== str2.length) {
    return false;
  }

  const sortStr1 = str1.split("").sort().join("");
  const sortStr2 = str2.split("").sort().join("");

  return sortStr1 === sortStr2;
}
