const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('./config/yargs')

console.clear();

// const [, , arg3] = process.argv
// const [, base = 1] = arg3.split("=")
// console.log(argv);

crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo, "creado"))
    .catch(err => console.log(err))
