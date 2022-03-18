const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')
//sino es un objeto se importa sin llaves, si es un objeto si se importa con llaves
//asi importo en node
console.clear()

crearArchivo(argv.b, argv.l, argv.h)
  .then(fileName => console.log(colors.yellow(fileName,'creado')))
  .catch(err => console.log(err))