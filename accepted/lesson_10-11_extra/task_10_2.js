const hero = {
  name: "Batman",
  health: 100,
  hitTheOpponent: (opponent) => (opponent.health -= 10),
};

const enemy = {
  name: "Joker",
  health: 100,
  hitTheOpponent: (opponent) => (opponent.health -= 10),
};

function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame(heroPlayer, enemyPlayer) {
  while (heroPlayer.health > 0 || enemyPlayer.health > 0) {
    const randomHeatNum = getRandomNumberInRange(0, 1);
    if (randomHeatNum === 0) {
      heroPlayer.hitTheOpponent(enemyPlayer);
      if (enemyPlayer.health <= 0) {
        break;
      }
    } else {
      enemyPlayer.hitTheOpponent(heroPlayer);
      if (heroPlayer.health <= 0) {
        break;
      }
    }
  }

  if (heroPlayer.health <= 0) {
    alert(
      `${enemyPlayer.name} победил! У него осталось ${enemyPlayer.health} здоровья`
    );
  } else {
    alert(
      `${heroPlayer.name} победил! У него осталось ${heroPlayer.health} здоровья`
    );
  }
}

startGame(hero, enemy);
