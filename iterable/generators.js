function* iterable() {
  yield "hola 1";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con más instrucciones");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function square(value) {
  setTimeout(() => {
    return console.log({ value, resultado: value * value });
  }, Math.random() * 1000);

  // return {
  //   value,
  //   resultado: value * value,
  // };
}

function* generador() {
  console.log("Inicia Generator");
  yield square(0);
  yield square(1);
  yield square(2);
  yield square(3);
  yield square(4);
  yield square(5);
  console.log("Termina el Generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
