const convertirBinarioDecimal = (num=undefined, base=undefined) => {
  if (num === undefined) {
    return console.warn("No ingresaste el número a convertir");
  }
  if (typeof num !== 'number') {
    return console.error(`El valor "${num}" ingresado, NO es un número`);
  }

  if (base === undefined) {
    return console.warn("No ingresaste el número a convertir");
  }
  if (typeof base !== 'number') {
    return console.error(`El valor "${num}" ingresado, NO es un número`);
  }
  if (base === 2) {
    return console.info(`${num} base ${base} = ${parseInt(num, base)} base 10`);
  } else if (base === 10) {
    return console.info(`${num} base ${base} = ${(num.toString(2))} base 2`);
  } else {
    return console.info("El tipo de base a convertir NO es válido");
  }
}

convertirBinarioDecimal();
convertirBinarioDecimal("2");
convertirBinarioDecimal(100);
convertirBinarioDecimal(100, "2");
convertirBinarioDecimal(100, 2);
convertirBinarioDecimal(1000110101, 2);
convertirBinarioDecimal(114, 10);
convertirBinarioDecimal(120, 10);

