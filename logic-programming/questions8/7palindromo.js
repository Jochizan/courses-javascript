const palindromo = (text="") => {
  if (!text) {
    console.log("No ingresaste una palabra o frase");
  }
  text = text.toLowerCase();
  let invertida = text.split('').reverse().join('');
  return (text === invertida)
    ? console.info(`Si es un palindromo. Palabra original ${text}. Palabra al revés ${invertida}`)
    : console.info(`No es un palindromo. Palabra original ${text}. Palabra al revés ${invertida}`);
}

palindromo('Do geese see God');

const isPalindrom = (str) => {
  str = str.replace(/\s/g, '');
  const lowered = str.toLowerCase();
  const splitted = lowered.split('');
  const reversed = splitted.reverse();
  const joined = reversed.join('');
  return lowered == joined;
}

const f = isPalindrom('Do geese see God');
console.log(f);
