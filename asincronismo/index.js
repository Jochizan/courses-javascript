console.log("Inicio");
//setTimeout(() => {
  //console.log("Ejecutando un setTimeout, esto se ejecuta una sola vez");
//}, 1000)
//setInterval(() => {
  //console.log("Ejecutando un setinterval, esto se ejecuta indefinidamente");
//}, 1000)
//let temporizador = setTimeout(() => {
  //console.log(new Date().toLocaleTimeString());
//}, 1000)

//clearTimeout(temporizador);
//console.log("Despúes del clearTimeout");
let temporizador = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000)

clearInterval(temporizador);
console.log("Despúes del clearInterval");
