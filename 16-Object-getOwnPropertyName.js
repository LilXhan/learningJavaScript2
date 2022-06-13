// Object.getOwnPropertyNames()

// EL metodo Object.getOwnPropertyNames() => devuelve un array con todas las propiedades (numerables o no)
// encontradas en un objeto
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
const arr = ['a', 'b', 'c'];
print(Object.getOwnPropertyNames(arr).sort()); // imprime "0,1,2,length"

// Objeto similar a Array
const obj = { 0: 'a', 1: 'b', 2: 'c' };
print(Object.getOwnPropertyNames(obj).sort()); // imprime "0,1,2"

// Imprime nombres de variables y valores usando Array.forEach
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  print(val + ' -> ' + obj[val]);
});
// imprime
// 0 -> a
// 1 -> b
// 2 -> c

// propiedad no-numerable
const my_obj = Object.create({}, { getFoo: { value: function () { return this.foo; }, enumerable: false } });
my_obj.foo = 1;

print(Object.getOwnPropertyNames(my_obj).sort()); // imprime "foo, getFoo"
