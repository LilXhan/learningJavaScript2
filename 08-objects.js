// Objetos

// JavaScript esta diseñado en un paradigma simple de objetos

// Un objeto es una coleccion de propiedades, y una propiedad es una asociacion entre un nombre(o clave) y un valor
// signfica que todos tienen su respectiva propiedad y su respectivo valor.

// El valor de una propiedad puede ser una funcion en cuyo caso la propiedad es conocida como un metodo
// cuando la propiedad es una funcion eso se llama metodo

// Ademas de los objetos que estan predefinidos en el navegador puedes definir tus propios objetos

// Los objetos son similiares a los arreglos (arrays), excepto que en lugar de usar indices para acceder y
// modificar sus datos, accedes a los datos en objetos a traves de propiedades (propierties)

const gato = {
  nombre: 'Valiente',
  color: 'Blanco',
  durmiendo: true,
  edad: 10,
  enemigos: ['agua', 'perros']
};

console.log(gato);
console.log(gato.nombre);
// console.log(gato["nombre"]);
console.log(gato.durmiendo);
console.log(gato.enemigos[0]);
