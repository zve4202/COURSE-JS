// Задание 1
console.log("задание 1");

const bestUserLogin = "the_best_user";
const bestUserPassword = "12345678";

let currentUserLogin = prompt("Введите логин");
let currentUserPassword = prompt("Введите пароль");
currentUserLogin = currentUserLogin.trim();
currentUserPassword = currentUserPassword.trim();

if (bestUserLogin === currentUserLogin && bestUserPassword === currentUserPassword) {
  alert(`Добро пожаловать, ${currentUserLogin}!`);
} else {
  alert("Логин и (или) Пароль введены неверно!");
}
