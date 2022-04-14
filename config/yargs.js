const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Base de la tabla de multiplicar",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base debe ser un número";
    }
    return true;
  })
  .option("h", {
      alias: 'hasta',
      describe: 'Número hasta el que calcula la tabla',
      type: 'number',
      default: 10 
  }).check((argv, options) => {
      if( isNaN(argv.h) ) {
          throw 'Hasta debe ser un numero entero'
      }
      return true
  })
  .argv;

module.exports = argv;
