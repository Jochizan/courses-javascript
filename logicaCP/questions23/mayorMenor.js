const menorMayorA = (array=[]) => {
  if (!array.length) {
    return console.warn("Envio un array vacío");
  }
  array.sort((a, b) => {
    return a - b;
  });
  return console.info(array[0], array[array.length - 1]);
}

menorMayorA([10, 2, 15, 5, 20, 1, -100]);
menorMayorA([102, 101, 20, -2000, -100]);
menorMayorA([5, 20, 1, -109]);
menorMayorA([10, 5, 67, 1, -120]);
