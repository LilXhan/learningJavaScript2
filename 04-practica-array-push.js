// carrito de compras

const fruits = [];
const fruit = prompt('Bienvenido, ¿que fruta desea comprar?');
fruits.push(fruit);

while (confirm('¿Desea comprar mas frutas?')) {
  const fruit = prompt('¿Que fruta desea comprar?');
  fruits.push(fruit);
}
console.log('Su carrito de compras:');
for (const fruit of fruits) {
  console.log(fruit);
}
