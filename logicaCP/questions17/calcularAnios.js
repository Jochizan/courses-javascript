const calcularAnios = (fecha=undefined) => {
  if (fecha === undefined) {
    return console.warn("No ingresaste la fecha");
  }
  if (!(fecha instanceof Date)) {
    return console.error("El valor que ingresaste no es una fecha valida");
  }
  let hoyMenosfecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365,
    aniosHumanos = Math.floor(hoyMenosfecha / aniosEnMS);
  return (Math.sign(aniosHumanos) === -1)
    ? console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    : (Math.sign(aniosHumanos) === 1)
      ? console.info(`Han pasado ${aniosHumanos} años, desde el ${fecha.getFullYear()}`)
      : console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios()
calcularAnios({})
calcularAnios(false)
calcularAnios(new Date())
calcularAnios(new Date(2001, 1, 4));
calcularAnios(new Date(1984, 1, 4));
calcularAnios(new Date(1700, 1, 4));
calcularAnios(new Date(2084, 1, 4));
calcularAnios(new Date(3069, 1, 4));
