const capicua = (num=0) => {
  if (!num) {
    return console.log("No ingresaste un número.");
  }
  if (typeof num !== 'number') {
    return console.log(`El valor "${num}" ingresado, NO es un número.`);
  }
  num = num.toString();
  let reverse = num.split('').reverse().join('');
  return (num === reverse)
    ? console.log(`El número es capicua. Número original ${num}. Número al revés ${reverse}.`)
    : console.log(`El número NO es capicua. Número original ${num}. Número al revés ${reverse}`);
}

capicua();
capicua("Joan");
capicua([1, 2, 3]);
capicua({});
capicua(1001);

