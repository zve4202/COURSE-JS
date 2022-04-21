console.log(isPalindrome("racecar"));
console.log(isPalindrome("programmer"));

function isPalindrome(sourceStr) {
  const resultStr = sourceStr.split("").reverse().join("");
  return sourceStr === resultStr;
}
