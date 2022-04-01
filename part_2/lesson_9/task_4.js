const coffees = ["Latte", "Cappuccino", "Americano"];
const prices = [1.5, 1, 2];

const newPrices = prices.map((price) => { return price + 0.5 });
addElement("h3", "Объявление!");

coffees.forEach((coffee, index) => {
  addElement("p", `Кофе ${coffee} сейчас стоит ${newPrices[index]} евро`);
  
  //alert(`Кофе ${coffee} сейчас стоит ${newPrices[index]} евро`);
});

function addElement(tagName, message) {
  const element = document.createElement(tagName);
  element.innerHTML = message;
  document.body.appendChild(element);
}