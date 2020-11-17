const convertirGrados = (grados=undefined, unidad=undefined) => {
  if (grados === undefined) {
    return console.warn("No ingresaste grados a convertir");
  }
  if (typeof grados !== 'number') {
    return console.error(`El valor "${grados}" ingresado, NO es un número`);
  }
  if (unidad === undefined) {
    return console.warn("No ingresaste grados a convertir");
  }
  if (typeof unidad !== 'string') {
    return console.error(`El valor "${unidad}" ingresado, NO es un número`);
  }
  if (unidad.length !== 1 || !/(C|F)/.test(unidad)) {
    return console.warn("Valor de la unidad no reconocido");
  }
  if (unidad === 'C') {
    return console.info(`${grados}°C = ${Math.round(grados * (9 / 5)) + 32}°F`);;
  } else if (unidad === 'F') {
    return console.info(`${grados}°F = ${Math.round((grados -32) * (5 / 9))}°C`);;
  }
}

convertirGrados(2)
convertirGrados(false)
convertirGrados(2, 'F')
convertirGrados(2, 'C')
convertirGrados(32, 'F')
convertirGrados(100, 'C')
convertirGrados(0, 'C')
convertirGrados(100, 'F')
