const ordersArr = [4, 2, 1, 3];
const people = [
  { id: 1, name: "Максим" },
  { id: 2, name: "Николай" },
  { id: 3, name: "Ангелина" },
  { id: 4, name: "Виталий" },
];

console.log("result1", giveTalonsInOrder(people, ordersArr));
console.log("result2", giveTalonsInOrder2(people, ordersArr));
console.log("result3", giveTalonsInOrder3(people, ordersArr));
/* Возвращает массив
[
   { id: 4, name: 'Виталий' },
   { id: 2, name: 'Николай' },
   { id: 1, name: 'Максим' },
   { id: 3, name: 'Ангелина' }
]
*/

function giveTalonsInOrder(persons, orders){
  
  const newPersons = [...persons];
  newPersons.sort((a, b) => {
    return orders.indexOf(a.id) - orders.indexOf(b.id);
  });
  return newPersons;
}

function giveTalonsInOrder2(persons, orders) {
  return orders.map((order) => {
    return persons.find((person) => {
      return person.id === order;
    });
  });
}


function giveTalonsInOrder3(persons, orders) {
  const objIndexedPersons = persons.reduce((acc, person) => {
    // добавляем в acc поля c person { 1: { id: 1, name: "Максим" }, 2: { id: 2, name: "Николай" } ... }
    acc[person.id] = person;
    return acc;
  }, {}); // acc - пустой объект

  // console.log("objIndexedPersons", objIndexedPersons);
  
  return orders.map((order) => {
    // извлекаем person из поля
    return objIndexedPersons[order];
  });
}
