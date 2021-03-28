const recorte = (text, n) => {
  if (typeof text === 'string' && typeof n === 'number') {
    return text.substring(0, n);
  } else {
    return -1;
  }
}

console.log(recorte("Hola mundo", 4));

const recortarTexto = (cadena="", longitud=undefined) =>
  (!cadena)
    ? console.warn("No hay una cadena")
    : (longitud === undefined)
      ? console.warn("No ingresaste una longitud para recortar el tecto")
      : console.log(cadena.slice(0, longitud));

recortarTexto("Hola mundo", 4)
