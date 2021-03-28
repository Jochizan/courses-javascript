const invertirPalabra = (text="") => {
  (!text)
    ? console.warn("No ingresaste una cadena de texto")
    : console.info(text.split('').reverse().join(''));
}

invertirPalabra("Joan")
