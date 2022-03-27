// 1
console.log("console.log");
console.log(String(console.log));
console.log(Number(console.log));
console.log(Boolean(console.log));
// 2
console.log("----------");
console.log("{ name: 'Maxim' }");
console.log(String({ name: "Maxim" }));
console.log(Number({ name: "Maxim" }));
console.log(Boolean({ name: "Maxim" }));
// 3
console.log("----------");
console.log("Symbol('key')");
console.log(String(Symbol("key")));
// console.log(Number(Symbol('key'))); Error present
console.log(Boolean(Symbol("key")));
// 4
console.log("----------");
console.log("Number");
console.log(String(Number));
console.log(Number(Number));
console.log(Boolean(Number));
// 5
console.log("----------");
console.log("empty string");
console.log(String(""));
console.log(Number(""));
console.log(Boolean(""));
// 6
console.log("----------");
console.log("0");
console.log(String(0));
console.log(Number(0));
console.log(Boolean(0));
// 7
console.log("----------");
console.log("-10");
console.log(String(-10));
console.log(Number(-10));
console.log(Boolean(-10));
// 8
console.log("----------");
console.log("-105");
console.log(String("-105"));
console.log(Number("-105"));
console.log(Boolean("-105"));
