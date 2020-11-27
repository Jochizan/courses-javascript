const paresImpares = (array=[]) => {
  if (!array.length) {
    return console.warn("Ingreso un array vacío");
  }
  const ans = {
    pares: [],
    impares: []
  };
  array.map((value, index) => {
    (value % 2 === 0)
      ? ans.pares.push(array[index])
      : ans.impares.push(array[index]);
  });
  return console.info(ans);
}

paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
paresImpares([1, 100, 20, 21, 31, 20, 120, 187]);
