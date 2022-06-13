// Object Values

// Object values => devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto

const perro = {
  nombre: 'Rex',
  edad: 15,
  duerme: true,
  enemigos: ['agua', 'gato']
};

console.log(Object.values(perro));

// Pintar los valores pero sin un array

Object.values(perro).forEach((item) => console.log(item));
