const estado = true;

if (estado) {
  const estado = false;
  console.log(estado);
}

console.log(estado);

// Const con Array los objetos incluidos los arreglos y las funciones asignados a una variable const siguen
// siendo mutables(osea que se pueden modificar). EL uso de const solo evita la resignacion del identificador de variable

const frutas = [];
frutas[0] = 'Platanito';

console.log(frutas);
