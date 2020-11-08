const factorial = (num=0) => (num === 0) ? 1 : num * factorial(num - 1);

console.log(factorial(10));

const factorialValid = (num=undefined) => {
  if (num === undefined) {
    return console.log("No ingresaste un número");
  }
  if (typeof num !== 'number') {
    return console.log(`El valor "${num}" ingresado, NO es un número`);
  }
  if (num === 0) {
    return console.log("El número no puede ser 0");
  }
  if (Math.sign(num) === -1) {
    return console.log("El número no puede ser negativo");
  }
  return console.log(factorial(num));
}

factorialValid(20);

