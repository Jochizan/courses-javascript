const isPrim = (num=undefined) => {
  for (let i = 2; i * i <= num; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const prim = (num=undefined) => {
  if (num === undefined) {
    return console.warn("No ingresaste un número");
  }
  if (typeof num !== 'number') {
    return console.warn(`El valor de "${num}" ingresado, NO es número`);
  }
  if (num === 0) {
    return console.error("El valor no puede ser 0");
  }
  if (num === 1) {
    return console.error("El valor no puede ser 1");
  }
  if (Math.sign(num) === -1) {
    return console.error("El número no puede ser negativo");
  }
  return isPrim(num);
}

console.log(prim(11));
