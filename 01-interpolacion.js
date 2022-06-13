
const nombreUsuario = 'Flavio';
const estado = false;

console.log(`Bienvenido:
${nombreUsuario.toUpperCase()}` // ${nombreUsuario} => es una interporlacion // toUpperCase() = lo convierte a mayuscula
);

console.log(`Su estado es: ${estado ? 'Activo' : 'Desactivado'}`);

function greet () {
  return 'hello';
}
greet();
