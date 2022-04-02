const matrix = [];

for (let i = 0; i < 3; i++) {
  const lineOfMatrix = [];
  for (let j = 1; j <= 5; j++) {
    lineOfMatrix.push(j);
  }
  matrix.push(lineOfMatrix);
}

console.log(matrix);