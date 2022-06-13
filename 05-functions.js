// funcion declarativa
// con las funciones declaradas. tenemos la seguridad que siempre estaran disponibles en tiempo de ejecucion
// da lo mismo donde la llamemos siempre la vamos a tener disponible

function numAleatorio (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(numAleatorio(10, 100));

// funcion expresada si llamamos a la funcion antes de declararla no funciona
// con las funciones expresadas garantiza que formaran parte de un flujo general del pograma

const numAzar = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(numAzar(200, 300));
