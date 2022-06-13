// Destructuring Object

// desestructuracion => La sintaxis de desestructuracion es una expresion de JavaScript que permite desempacar
// valores de arreglos o propiedades de objetos en distintas variables
const perro = {
  nombre: 'Rex',
  duerme: true,
  edad: 15,
  enemigos: ['agua', 'gato']
};

// const nombrePerro = perro.nombre;
const { nombre, duerme, edad } = perro; // console: Rex true 15
console.log(nombre, duerme, edad);

// ALIAS ---------------------------------------------------------------------------------------------------------
// si una variable ya esta declarada podemos usar el alias

const { nombre: superPerro, duerme: duermeGato, edad: edadPerro } = perro; // console: Rex true 15
console.log(superPerro, duermeGato, edadPerro);

// POR DEFECTO ---------------------------------------------------------------------------------------------------
// si no existe una propiedad podemos le podemos asignar un nombre por defecto
const gato = {
  // nombre: 'valiente',
  durmiendo: false,
  edad: 10,
  enemigos: ['agua', 'perro']
};

const { nombre: superGato = 'Sin Nombre', durmiendo } = gato;
console.log(superGato, durmiendo);

// Desestructuracion de objetos anidados -------------------------------------------------------------------------

const gatito = {
  nombre: 'Pereza',
  edad: 10,
  durmiendo: false,
  enemigos: ['agua', 'perrito'],
  otros: {
    amigos: ['cobarde', 'valiente'],
    favoritos: {
      caliente: 'Pollito',
      frio: 'Salmon'
    }
  }
};

// const amigos = gatito.otros.amigos;
const { amigos } = gatito.otros;
console.log(amigos);
// const { otros: { amigos: amigosGato } } = gatito;

// La destructuring tambien sirve para Array, solo reemplazar por [] ---------------------------------------------

const perrito = {
  nombre: 'Pulgoso',
  edad: 1,
  duerme: true,
  enemigos: ['agua', 'gatito'],
  otros: {
    amigos: ['blanquito', 'negrito', 'Pegajoso'],
    favoritos: {
      caliente: 'Pollito',
      frio: 'Sopita'
    }
  }
};

// const { amigos: amigosPerrito } = perrito.otros;
const amigosPerrito = ['blanquito', 'negrito', 'Pegajoso'];

const [amigoUno, amigoDos, amigoTres, amigoCuatro = 'No Existe'] = amigosPerrito;

console.log(amigoUno, amigoCuatro);
