console.log("Убийца", getKiller(
  {
    "James": ["Jacob", "Bill", "Lucas"],
    "Johnny": ["David", "Kyle", "Lucas"],
    "Peter": ["Lucy", "Kyle"],
  },
  ["Lucas", "Bill"]
)); // Убийца James

console.log("Убийца", getKiller(
  {
    "Brad": [],
    "Megan": ["Ben", "Kevin"],
    "Finn": [],
  },
  ["Ben"]
)); // Убийца Megan

function getKiller(suspectInfo, deadPeople = []) {
    let killerName = "";
    Object.entries(suspectInfo).forEach((item) => {
      const suspected = item[0];
      const killerSawPeople = item[1];
      const isKiller = deadPeople.every((deadName) =>
        killerSawPeople.includes(deadName)
      );
      if (isKiller) {
        killerName = suspected;
      }
    });

    return killerName;
}


