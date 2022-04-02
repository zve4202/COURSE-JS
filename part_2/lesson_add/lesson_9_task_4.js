const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flatArray = [...matrix[0], ...matrix[1], ...matrix[2]]; 

console.log(flatArray);