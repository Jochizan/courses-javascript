const lenCad = (text="") => {
  if (typeof text === "string" && text) {
    return text.length;
  } else {
    return -1;
  }
}

const lenCadena = (text="") =>
  (!text || typeof text !== 'string')
    ? -1
    : text.length;

console.log(lenCadena(""));
console.log(lenCad(" "));
