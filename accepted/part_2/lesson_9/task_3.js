const coffees = ["Latte", "Cappuccino", "Americano"];

let orderedCoffeeName = prompt("Поиск кофе по названию:");
orderedCoffeeName = orderedCoffeeName.trim().toLocaleLowerCase();

const orderedCoffeeIndex = coffees.findIndex((coffee) => coffee.toLocaleLowerCase() === orderedCoffeeName);

if (orderedCoffeeIndex >= 0) {
  alert(
    `Держите ваш любимый кофе ${coffees[orderedCoffeeIndex]}. Он ${orderedCoffeeIndex + 1}-й по популярности в нашей кофейне.`
  );
} else {
  alert("К сожалению, такого вида кофе нет в наличии");
}