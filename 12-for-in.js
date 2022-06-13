// for in es para los objetos y for of es para los arrays

// for in => itera sobre todas las propiedades enumerables que esta codificado por cadenas

const perro = {
  nombre: 'Rex',
  color: 'Marron',
  edad: 15,
  enemigos: ['agua', 'gato']
};

for (const propierty in perro) {
  console.log(propierty);
}

// mostrar los valores de las propiedades

for (const value in perro) {
  console.log(perro[value]);
}
