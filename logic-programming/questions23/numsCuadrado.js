const numsCuadrados = (array=undefined) => {
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
  const newArr = array.map(value => value * value);
  return console.info(newArr);
}

numsCuadrados();
numsCuadrados({});
numsCuadrados([]);
numsCuadrados([1, 2, 3])
