const arraySplit = (text, ch) => {
  if (typeof text === 'string' && typeof ch === 'string') {
    // La función split devuelve un array saltando el caracter especificado "ch"
    return text.split(ch);
  } else {
    return "Error";
  }
}

console.log(arraySplit('hola que tal ', ' '));

const splitD = (text, caracter) => {
  const result = [];
  if (typeof text === 'string' && typeof caracter === 'string') {
    let str = "";
    for (let i = 0; i < text.length; ++i) {
      if(text[i] === caracter) {
        result.push(str);
        str = "";
      }
      if (text[i] != caracter) {
        str += text[i];
      }
    }
    if (str != false) {
      result.push(str)
    }
    return result;
  } else {
    return "Error";
  }
}

console.log(splitD('hola que tal ', ' '));
