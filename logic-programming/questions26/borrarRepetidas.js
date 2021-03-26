const borrarRepetidos = (arr=undefined) => {
  if (arr === undefined) {
    return console.warn("No ingresaste un arreglo de números");
  }
  if (!(arr instanceof Array)) {
    return console.error("El valor que ingresaste no es un arreglo");
  }
  if (!arr.length) {
    return console.error("El arreglo esta vacío");
  }
  if (arr.length === 1) {
    return console.error("El arreglo debe tener almenos dos elementos");
  }
  return console.info({
    original: arr,
    sinDuplicador: [...new Set(arr)]
  });
  //console.info({
    //original: arr,
    //sinDuplicar: arr.filter((value, index, self) => self.indexOf(value) === index)
  //});
}

borrarRepetidos();
borrarRepetidos({});
borrarRepetidos([]);
borrarRepetidos([1]);
borrarRepetidos(["x", 10, "x", 2, "10", true, true]);
