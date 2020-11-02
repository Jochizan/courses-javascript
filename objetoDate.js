console.log(Date());

let fecha = new Date();
console.log(fecha);
// día del mes
console.log(fecha.getDate());
// día de la semana D L M M J V S = [0, 1, 2, 3, 4, 5, 6]
console.log(fecha.getDay());
// mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic
// -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());
// A partir de 1900
console.log(fecha.getYear());
// A partir del año "0"
console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCHours());
console.log(Date.now());
let cumpleJoan = new Date(2001, 0, 4);
console.log(cumpleJoan);
