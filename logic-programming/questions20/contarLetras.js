const contarLetras = (cadena="") => {
  if (!cadena) {
    return console.warn("No ingresaste una cadena de texto");
  }
  if (typeof cadena !== 'string') {
    return console.error(`El valor "${cadena}" ingresado, NO es una cadena de texto`);
  }
  let vocales = 0, consonantes = 0;
  for (let letra of cadena) {
    if (letra !== ' ') {
      ((/[aeiou]+/i.test(letra) || /[á-ü]+/i.test(letra)) && /[^ñ]/i.test(letra))
        ? vocales++
        : consonantes++;
    }
  }
  return console.info(
    cadena,
    vocales,
    consonantes
  );
}

contarLetras();
contarLetras(3);
contarLetras("Hola muádo");
contarLetras("Naaaaaaaa");
contarLetras("XDe");
contarLetras("No manches");
contarLetras("ÑOño");
