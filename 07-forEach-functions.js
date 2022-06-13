const fruits = [];
const fruit = prompt('Bienvenido, ¿que fruta desea comprar?');
fruits.push(fruit);

while (confirm('¿Usted desea comprar mas frutas?')) {
  const fruit = prompt('¿Que fruta usted desea comprar?');
  fruits.push(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

//

const marks = ['Logitech', 'HyperX', 'RedDragon'];

marks.forEach((mark, index) => {
  console.log(`${index + 1}.${mark}`);
});
