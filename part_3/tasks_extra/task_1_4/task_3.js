console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));
console.log(unique2([1, 1, 2, 2, 4, 2, 3, 7, 3]));

function unique(arr) {
  const res = []; // пустой array

  arr.sort().forEach((item) => {
    if (!res.includes(item)) {
      res.push(item);
    }
  });

  return res; // возвращаем array res
}

function unique2(arr) {
  const res = {}; // пустой object

  arr.forEach((item) => {
    // создаём уникальные ключи
    res[item] = "";
  });

  return Object.keys(res).map((item) => Number(item)); // возвращаем array из ключей
}