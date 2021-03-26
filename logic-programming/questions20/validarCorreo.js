const validarEmail = (email="") => {
  if (!email) {
    return console.warn("No ingresaste un email");
  }
  if (typeof email !== "string") {
    return console.error(`El valor "${email}" ingresado, NO es una cadena texto`);
  }
  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
  return (expReg)
    ? console.info(`"${email}", es un email válido`)
    : console.warn(`"${email}", NO es un email válido`);
}

validarEmail();
validarEmail(3);
validarEmail("jon,mir,cha@gmail");
validarEmail("joanjose_04@hotmail.com");
