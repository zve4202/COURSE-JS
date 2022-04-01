let health = prompt('Введите число параметра "здоровье" для персонажа');
health = Number(length);
if (health < 0 || !health) {
      alert('Параметр "здоровье" должен быть больше нуля!');
} else {
   alert(`Параметр "здоровье" равен ${health}`);
}