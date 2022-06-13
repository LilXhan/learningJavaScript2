// Arrow function

const azarArrow = (max, min) => {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(azarArrow(1, 10));
// la ventaja de esto es que se puede reducir:
// const azarArrow = (max, min) => return Math.floor(Math.random() * (max - min) + min);

const randomArrow = (min = 1, max) => Math.floor(Math.random() * (max - min) + min);
console.log(randomArrow(null, 10));
