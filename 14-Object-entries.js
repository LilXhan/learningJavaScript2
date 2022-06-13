// Object.entries(obj) => el metodo Object.entries() devuelve una matriz de pares propios de una enumerable  [key, value]

const obj = { key: 'value', key2: 'value2' };

console.log(Object.entries(obj)); // [['key', 'value'], ['key2', 'value2']]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// iterate through key-value gracefully
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Or, using array extras
Object.entries(obj).forEach(([key, value]) => {
  console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});


// Ejemplos

const perrera = { perros: 15, gatos: 10, trabajadores: 20 };

for (const [key, value] of Object.entries(perrera)) {
  console.log(`Tengo ${value} ${key}`);
}

Object.entries(perrera).forEach(([key, value]) => console.log(`Tengo ${value} ${key}`));
