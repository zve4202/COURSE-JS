
// Задание 4
console.log("задание 4 - Циклы");

for (let i = 0; i < 3; i += 1) {
   let newStudent = prompt('Введите имя нового студента!');
   newStudent = newStudent.trim();
   if (newStudent) {
      alert(`Добро пожаловать, ${newStudent}!`)
   }
}

let i = 0;
while (i < 3)
{
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }
  i += 1;
}

i = 0;
do {
  let newStudent = prompt("Введите имя нового студента!");
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`);
  }  
  i += 1;
} while (i < 3);