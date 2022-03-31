// Урок 6, задание 2

const clientName = prompt("Введите имя клиента");

let clientSpentToday = prompt("Сколько клиент потратил сегодня?");
let clientSpentForAllTime = prompt("Сколько клиент потратил за все время?");

clientSpentForAllTime = Number(clientSpentForAllTime);
clientSpentToday = Number(clientSpentToday);


if (!clientSpentToday || !clientSpentForAllTime) {
  alert(
    "Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку."
  );
} else {  
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
}