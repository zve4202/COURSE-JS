// Урок 6, задание 1

const clientName = "Игорь";
let clientSpentForAllTime = 110;

let clientSpentToday = 25;

let discount = 0;

if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
  discount = 10;
} else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
  discount = 20;
} else if (clientSpentForAllTime >= 500) {
  discount = 30;
}

alert(`Вам предоставляется скидка в ${discount}%!`);

clientSpentToday -= (clientSpentToday * discount) / 100;
clientSpentForAllTime += clientSpentToday;

alert(
  `Спасибо, ${clientName}!\nК оплате ${clientSpentToday}$.\nЗа все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`
);