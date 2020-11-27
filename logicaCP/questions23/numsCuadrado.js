const numsCuadrados = (array=[]) => {
  if (!array.length) {
    return console.warn("Envio un array vacío");
  }
  let n = array.length;
  for (let i = 0; i < n; ++i) {
    array[i] *= array[i];
  }
  return console.info(array);
}

numsCuadrados([1, 2, 3])
