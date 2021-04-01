const paresImpares = (array=undefined) => {
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
  const ans = {
    pares: [],
    impares: []
  };
  array.map((value) => {
    (value % 2 === 0)
      ? ans.pares.push(value)
      : ans.impares.push(value);
  });
  return console.info(ans);
}

paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
paresImpares([1, 100, 20, 21, 31, 20, 120, 187]);
