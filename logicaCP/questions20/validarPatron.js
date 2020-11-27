const validarPatron = (cadena="", patron="") => {
  if (!cadena) {
    return console.warn("No ingresaste cadena de texto a evaluar");
  }
  if (typeof cadena !== "string") {
    return console.error(`El valor "${cadena}" ingresada, NO es una cadena de texto`);
  }
  if (!patron) {
    return console.warn("No ingresaste un patrón a evaluar");
  }
  if (!(patron instanceof RegExp)) {
    return console.error(`El valor "${patron}" ingresada, NO es una expresión regular`);
  }
  let expReg = patron.test(cadena);
  return (expReg)
    ? console.info(`"${cadena}", cumple con el patrón ingresado`)
    : console.warn(`"${cadena}", NO cumple con el patrón ingresado`);
}

validarPatron({});
validarPatron("Hola mundo", [1, 2, 3]);
validarPatron("Jonathan Mircha", /^[A-Za-zñáéíóú\s]+$/ig);
validarPatron("joanjose_04@hotmail.com", /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i);
