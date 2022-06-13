// Array y Array Metodos

// push() => el metodo push añade uno o mas elementos al final de un array, y devuelve la nueva longitud del array

const frutas = ['Sandia', 'Platano', 'Mandarina', 'Pera'];
frutas.push('Banana');

console.log(frutas);

// unshift() => agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array

const nameUsers = ['Pablo', 'Pedro', 'Pepe'];
nameUsers.unshift('Flavio');

console.log(nameUsers);

// pop() => elimina el ultimo elemento de un array y lo devuelve. Este metodo cambia la longitud del array

const products = ['Galletas', 'Leche', 'Atun'];
const productDelete = products.pop();

console.log(products);
console.log(productDelete);

// shift() => elimina el primer elemento del array y lo retorna. Este metodo modifica la longitud del array

const marks = ['Adidas', 'Nike', 'Gucci', 'Supreme'];
const firstMarkDelete = marks.shift();

console.log(firstMarkDelete);
console.log(marks);
