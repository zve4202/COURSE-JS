let integerVar = 20;
console.log(Number(integerVar), Boolean(integerVar), String(integerVar));

let stringVar = "Vova";
console.log(Number(stringVar), Boolean(stringVar), String(stringVar));

let booleanVar = true;
console.log(Number(booleanVar), Boolean(booleanVar), String(booleanVar));

let nullVar = null;
console.log(Number(nullVar), Boolean(nullVar), String(nullVar));

let undefinedVar = undefined;
console.log(Number(undefinedVar), Boolean(undefinedVar), String(undefinedVar));

let objectVar = {
  name: "Bit storage",
  numberOfBit: 1500,
  isReady: true,
};
console.log(Number(objectVar), Boolean(objectVar), String(objectVar));

let bigIntVar = 20n;
console.log(Number(bigIntVar), Boolean(bigIntVar), String(bigIntVar));

let symbolVar = Symbol("symbolVar");
console.log(
  "Error present for:",
  "console.log(Number(symbolVar), Boolean(symbolVar), String(symbolVar))"
);
console.log(Number(symbolVar.toString()), Boolean(symbolVar), String(symbolVar));

