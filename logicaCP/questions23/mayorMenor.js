const menorMayorA = (array=undefined) => {
  if (array === undefined) {
    return console.warn("No ingresaste un arreglo de números");
  }
  if (!(array instanceof Array)) {
    return console.error("El valor que ingresaste no es un arreglo");
  }
  if (!array.length) {
    return console.warn("El arreglo esta vacío");
  }
  for (let num of array) {
    if (typeof num !==  "number") {
      return console.error(`El valor "${num}" ingresado, NO es un número`);
    }
  }
  // De esta manera se ordena un array
  //array.sort((a, b) => {
    //return a - b;
  //});
  //return console.info(array[0], array[array.length - 1]);
  return console.info(`El arreglo original: ${array}\nValor mayor: ${Math.max(...array)},\nValor menor: ${Math.min(...array)}`);
}

menorMayorA([10, 2, 15, 5, 20, 1, -100]);
menorMayorA([102, 101, 20, -2000, -100]);
menorMayorA([5, 20, 1, -109]);
menorMayorA([10, 5, 67, 1, -120]);
