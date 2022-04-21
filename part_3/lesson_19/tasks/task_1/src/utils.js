export function getRandomColor() {
  const 
    r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  
    return `rgb(${r},${g},${b})`;
}