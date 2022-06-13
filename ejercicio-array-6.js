const numRamdon = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

function numAleatorio () {
  const myArray = [];

  while (myArray.length < 6) {
    const number = numRamdon(0, 6);
    if (myArray.includes(number)) continue;
    myArray.push(number);
  }
  return myArray;
}

console.log(numAleatorio());
