const repetirTexto = (texto, n) => {
  if (typeof texto === 'string' && typeof n === 'number' && n > 0) {
    let result = "";
    for (let i = 0; i < n; ++i) {
      if (i > 0) {
        result += " ";
      }
      result += texto;
    }
    console.log(result);
  } else {
    console.log("Error");
  }
}

repetirTexto("Joan", -1);
