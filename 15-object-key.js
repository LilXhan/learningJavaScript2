// Object Keys
//  El método Object.keys() devuelve un array de las propiedades
// names de un objeto, en el mismo orden como se obtienen en un loop normal

const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// arreglo como objeto
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// arreglo como objeto con nombres ordenados aleatoriamente
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo es una propiedad no enumerable
const myObj = Object.create({}, { getFoo: { value: function () { return this.foo; } } });
myObj.foo = 1;

console.log(Object.keys(myObj)); // console: ['foo']

// EJemplos

const perifericos = { Teclados: 15, Microfonos: 10, Mouses: 'Logitech', Monitores: 15 };
console.log(Object.keys(perifericos));
