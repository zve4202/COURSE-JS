console.log(`Имя = "${getName1("Григорий")}"`);
// можно вызвать до декларирования
function getName1(name) {
  return name;
} 

const getName2 = function(name) {
  return `Имя = "${name}"`;
}; 
console.log(getName2("Константин"));

const getName3 = (name) => {
  return `Имя = "${name}"`;
};
/*
или
const getName3 = (name) => `Имя = "${name}"`;
*/ 
console.log(getName3("Сергей"));