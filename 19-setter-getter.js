// Getter y Setter

// son otras propiedades que tienen los objetos

// get => Enlaza la propiedad de un objeto con una funcion que sera llamada cuando la propiedad sera buscada
// debe tener exactamente 0 parametros
// No debe tener multiples getter en una misma propiedad

const perrito = {
  nombre: 'Valiente',
  duerme: true,
  edad: 1,
  enemigos: ['gatito', 'agua'],
  get nombreUppercase () {
    return this.nombre.toUpperCase();
  }
};

console.log(perrito.nombreUppercase);

// set => La sintaxis set asocia la propiedad de un objeto a una funcion y sera llamda cuando haya un intento de asignar
// valor a este propiedad
// toma un valor y podemos modificar los valores que tiene esas propiedades

const gatito = {
  nombre: 'Pereza',
  edad: 1,
  duerme: false,
  enemigos: ['perrito', 'agua'],
  set agregarEnemigo (nuevoEnemigo) {
    return this.enemigos.push(nuevoEnemigo);
  }
};

gatito.agregarEnemigo = 'batman';

console.log(gatito);
