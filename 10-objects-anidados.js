const gato = {
  name: 'Valiente',
  durmiendo: true,
  edad: 15,
  enemigos: ['agua', 'perrro'],
  otros: {
    amigos: ['cobarde', 'timido'],
    favoritos: {
      comida: {
        frio: 'salmon',
        caliente: 'pollito'
      }
    }
  }
};

console.log(gato.otros.amigos[0]);
// console.log(gato.otros.favorito?.comida.frio);
