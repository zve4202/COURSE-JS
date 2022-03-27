// 1. string - строка
const favoriteDrink = "coffee";
console.log("favoriteDrink", favoriteDrink, typeof favoriteDrink);

// 2. number - число
const numberOfCups = 5;
console.log("numberOfCups", numberOfCups, typeof numberOfCups);

// 3. boolean - логическое имеет 2 значения true или false
const isColdDrink = true;
console.log("isColdDrink", isColdDrink, typeof isColdDrink);

// 4. null - пусто, значение не известно
const studentsFavoriteDrink = null;
console.log("studentsFavoriteDrink", studentsFavoriteDrink, typeof studentsFavoriteDrink);

// 5. Undefined - значение не было присвоено
const carOwner = undefined;
console.log("carOwner", carOwner, typeof carOwner);

// 6. object - объект
const drink = {
  favoriteDrink: "coffee",
  numberOfCups: 5,
  isColdDrink: true,
};
console.log("drink", drink, typeof drink);

// 7. Symbol
const id = Symbol("id");
console.log("id", id, typeof id);

// 8. Bigint - большое число
const bigIntNumber = 100n;
console.log("bigIntNumber", bigIntNumber, typeof bigIntNumber);

