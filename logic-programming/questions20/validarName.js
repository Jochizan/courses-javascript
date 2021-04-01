const validarName = (nombre = '') => {
  if (!nombre) {
    return console.warn('No ingresaste un nombre');
  }
  if (typeof nombre !== 'string') {
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto`
    );
  }
  let expReg = /^[A-Za-zÑñá-ü\s]+$/g.test(nombre);
  return expReg
    ? console.info(`"${nombre}", es un nombre valido`)
    : console.warn(`"${nombre}", NO es un nombre válido`);
};

validarName();
validarName(3);
validarName('Joan');
