const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  let estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  
  estimation = Number(estimation.trim());
  
  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
};

for (let i = 0; i < 5; i += 1) {
  askClientToGiveEstimation();
}

const goodEstimations = clientsEstimations.filter((estimation) => {
  const result = estimation > 5;
  // console.log("goodEstimation", result);
  return result;
});

const poorEstimations = clientsEstimations.filter((estimation) => {
  const result = estimation <= 5;
  //console.log("poorEstimation", result);
  return result;
});

//console.log("goodEstimations / poorEstimations", goodEstimations, poorEstimations);

addElement('h2', 'Результат опроса');
addElement("p",`Всего положительных оценок: ${goodEstimations.length}<br>Всего отрицательных оценок: ${poorEstimations.length}`);

/*
alert(
  `Всего положительных оценок: ${goodEstimations.length};\nВсего отрицательных оценок: ${poorEstimations.length}`
);
*/

function addElement(tagName, message) {
  const element = document.createElement(tagName);
  element.innerHTML = message;
  document.body.appendChild(element);
}