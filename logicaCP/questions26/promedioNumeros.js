const promedioNums = (arr=undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de números");
  }
  if (!(arr instanceof Array)) {
    return console.error("El valor que ingresaste no es un arreglo");
  }
  if (!arr.length) {
    return console.error("El arreglo esta vacío");
  }
  for (let num of arr) {
    if (typeof num !== "number") {
      return console.error(`El valor "${num}" ingresado, NO es un número`);
    }
  }
  return console.info({
    normal: arr,
    promedio: arr.reduce((acc, el, index, arr) => {
      acc += el;
      return (index === arr.length - 1)
        ? `El promedio de (${arr.join(" + ")}) / ${arr.length} es ${acc / arr.length}`
        : acc;
    })
  });
}

promedioNums();
promedioNums(2);
promedioNums([1, 2, 3 ,4, 5]);
promedioNums([1, 1231, 123, 123, 12, 3, 12, 312, 3, 12, 312, 3, 12, 3]);
