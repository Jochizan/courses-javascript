console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Hola este esto es una informativo");
console.log("Un registro de lo que a pasado en nuestra aplicacion");

let nombre = "Joan",
  apellido = "Roca",
  edad = 19;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);
console.clear();
//esto solo funciona en navegador
//console.log(window);
//console.log(document);
console.clear();
console.group("Curso de @joanRoca en YouTube");
console.log("Curso de javascript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de FlexBox");
console.log("Curso de Diseño y programación Web");
console.groupEnd();
console.groupCollapsed("Curso de @joanRoca en YouTube");
console.log("Curso de javascript");
console.log("Curso de Node.js");
console.log("Curso de PWAs");
console.log("Curso de FlexBox");
console.log("Curso de Diseño y programación Web");
console.groupEnd();
console.log(console);
console.table(Object.entries(console));

const numbers = [1, 2, 3, 4, 5],
  vocales = ['a', 'b', 'c', 'd', 'e', 'f'];

console.table(numbers);
console.table(vocales);

const perro = {
  nombre: "Bony",
  raza: "Boxer",
  color: "Cafe"
}

console.table(perro);
console.clear();

console.time("Cuánto tiempo termina mi codigo");
const arreglo = Array(10000000);

for (let i = 0; i < arreglo.length; ++i) {
  arreglo[i] = i;
}

console.timeEnd("Cuánto tiempo termina mi codigo");
console.clear();

for (var i = 0; i <= 100; i++) {
  console.count("Codigo for")
  console.log(i);
}

let x = 1,
  y = 2,
  pruebaX = "Se esper*/a que X siempre sea mayor que Y";

console.assert(x < y, (x, y, pruebaX));
