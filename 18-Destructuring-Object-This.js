// hacer destructuring no se puede si la funcion tiene un this.

const perrito = {
  nombre: 'Valiente',
  edad: 14,
  duerme: true,
  enemigos: ['agua', 'gatito'],
  comida: {
    caliente: 'Pollito',
    frio: 'sopita'
  },
  mostrarComida () {
    console.log(`${this.nombre} esta comiendo ${this.comida.caliente}`);
  },
  mostrarEnemigos () {
    this.enemigos.forEach((item) => console.log(item));
  }
};

perrito.mostrarComida();
perrito.mostrarEnemigos();
