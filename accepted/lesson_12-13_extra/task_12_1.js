const attacker = {
  archer: 30,
  footSoldier: 55,
  cavalry: 10,
  artillery: 3,

  checkChancesToWin(defenderObject) {
    // получаем массивы значений для сравнения 
    const attackerValues = Object.values(this);
    const defenderValues = Object.values(defenderObject);
    
    let chances = 0;
    
    attackerValues.forEach((value, index) => {
      // проверяем только значения типа "number", могут быть и другие 
      if (typeof value === "number" && value > defenderValues[index]) {
        chances += 1;
      }
    });

    return [chances, defenderValues.length];
  },

  improveArmy() {
    // извлекаем массив пар ключ/значение для приращения значения на 5  
    Object.entries(this).forEach((item) => {
      const keyName = item[0];
      const value = item[1];
      // обрабатываем только значения типа "number"
      if (typeof value === "number") {
        this[keyName] = value + 5;
      }
    });
  },

  attack(defender) {
    const chancesValues = this.checkChancesToWin(defender);
    console.log("chancesValues", chancesValues);
    const [ourArmyChances, maximumChances] = chancesValues;
    const percentChances70 = Math.round(maximumChances * 70 / 100);
    console.log("ourArmyChances", ourArmyChances);
    console.log("percentChances70", percentChances70);
    
    if (ourArmyChances < percentChances70) {
      alert(
        `Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`
      );
      this.improveArmy();
    } else {
      alert("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
    }

    console.log(this);
  },
};

const defender = {
  archer: 33,
  footSoldier: 50,
  cavalry: 40,
  artillery: 10,
};

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление! 
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление! 
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!