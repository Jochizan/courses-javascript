const conteoEnCadena = (cadena="", texto="") => {
  if (!cadena) {
    console.warn("No ingresaste un texto largo");
  }
  if (!texto) {
    console.warn("No ingresaste la palabra a evaluar");
  }
  let i = 0,
    count = 0;
  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      count++;
    }
  }
  console.info(`La palabra ${texto} se repite ${count} veces.`);
}

conteoEnCadena("Joan Joan Roca HOrmaza Joan joan fernadno", "Joan");

let texto = "Joan Roca Hormaza vivo en Joan Joan Roca pilcomayo";
// El método search busca en toda la cadena la palabra indicada
// y devuelve el indice de su primera aparaición, sino
// existe entonces devolvera "-1"
//console.log(texto.search("Co"));

const findFrase = (text, frase) => {
  let count = 0;
  let index = text.indexOf(frase);
  while(index != -1) {
    count++;
    index = text.indexOf(frase, index + 1);
  }
  return count != 0 ?
    `Si se encontro la frase \"${frase}\" ${count} veces.` :
    `No se encontro la frase \"${frase}\".`
}

let ans = findFrase(texto, "Joan Roca");
console.log(ans);
