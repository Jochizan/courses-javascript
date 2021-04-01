const numeroParImpar = (num=undefined) => {
  if (num === undefined) {
    return console.warn("No ingresaste un número");
  }
  if (typeof num !== 'number') {
    return console.warn(`El valor ${num} ingresado, NO es un número`);
  }
  return (num % 2 === 0)
    ? console.info(`El número ${num} es Par`)
    : console.info(`El número ${num} es Impar`);
}

numeroParImpar();
numeroParImpar("23");
numeroParImpar(23);
numeroParImpar(10);

