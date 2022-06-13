// this hace referencia al objeto contexto de javascript en el cual se esta ejecutando el codigo actual
// contexto es un scope
const gato = {
  name: 'Valiente',
  durmiendo: true,
  edad: 15,
  enemigos: ['agua', 'perrro'],
  comer () {
    console.log(`${this.name} esta comiendo pollito`);
  },
  listarEnemigos () {
    this.enemigos.forEach((item) => console.log(item));
  }
};

gato.comer('pollito');
gato.listarEnemigos();
