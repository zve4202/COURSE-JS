const getSumOfSequence = (numbers) => {
    const resultArray = [];
    for (let i = 1; i <= numbers; i++) {
      resultArray.push(i);
    }  
    return resultArray[0] + resultArray[resultArray.length - 1];
}

console.log("getSumOfSequence(5)", getSumOfSequence(5));
console.log("getSumOfSequence(10)", getSumOfSequence(10));