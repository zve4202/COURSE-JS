const dog = {
  name: "Чарли",
  type: "Собака",
  makeSound() {
    return "Гав-Гав";
  },
};

const bird = {
  name: "Петя",
  type: "Воробей",
  makeSound() {
    return "Чик-чирик";
  },
};

function makeDomestic(isDomestic) {
  // Ваша реализация
  console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
  
  return {
    ...this,
    isDomestic,
  };
}

console.log(makeDomestic.bind(dog, true)()); // bind создаёт новую функцию, но не запускает её  
console.log(makeDomestic.call(dog, true));
console.log(makeDomestic.apply(bird, [false]));
