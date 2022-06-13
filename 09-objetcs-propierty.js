// Objetos Propiedades

// CRUD: Create, Read, Update, Delete

// Create(Crear una nueva propiedad)

const perro = {
  name: 'Rex',
  edad: 15,
  estado: 'Feliz',
  Durmiendo: true,
  enemigos: ['gatos', 'agua']
};

perro.juguete = 'Azul';

console.log(perro);

// Update(Actualizar)

perro.edad = 5;
console.log(perro);

// Delete (Elimina propiedad)

delete perro.Durmiendo;

console.log(perro);

/// hasOwnProperty

const gato = {
  nombre: 'Valiente',
  edad: 10,
  durmiendo: true,
  enemigos: ['agua', 'perro']
};

if (gato.hasOwnProperty('nombre')) {
  gato.nombre = 'Cobarde';
}
console.log(gato);
