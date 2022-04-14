const fs = require("fs");
const colors = require("colors");

const crearArchivo = (base, listar, hasta) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base}x${i.toString()} = ${base * i}\n`;
      consola += `${base.toString().blue}${"x".green}${i.toString().cyan} = ${(base * i).toString().rainbow}\n`;
    }

    if (listar) {
      console.log("===========".green);
      console.log(`tabla del ${base.toString().yellow}`);
      console.log("===========".green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    resolve(`tabla-${base}.txt`);
  });
};

module.exports = {
  crearArchivo,
};
