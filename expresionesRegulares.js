let cadena = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
//let expReg1 = new RegExp("Lorem", "ig");
let expReg2 = /lorem/ig;

//console.log(expReg1.test(cadena));
//console.log(expReg1.exec(cadena));
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));
// buscara tres veces la palabra anter puesta xd{num,}
let expReg3 = /Lorem{3,}/ig;
