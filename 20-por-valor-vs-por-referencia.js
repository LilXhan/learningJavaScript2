/* eslint-disable prefer-const */
// Por valor vs por referencia

// por valor: cuando asignamos valores primitivos (boolean, null, undefined, number, string y symbol), el valor
// asignado es una copia del valor que estamos asignando.

let a = 'hola';
let b = a;
// console.log(b) = consola: 'hola'
a = 'chao';

console.log(b); // consola: 'hola'

// por referencia

let c = ['hola'];
let d = c;
// console.log(d); => consola: ['hola']
c.push('chao');

console.log(d);

let e = { nombre: 'Flavio' };
let f = e;

e.nombre = 'Dangel';

console.log(f);
