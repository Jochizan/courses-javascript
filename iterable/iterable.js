const iterable = new Set([1, 2, 3, 3, null, null, true, false, false]);
const iterador = iterable[Symbol.iterator]();

console.log(iterable, iterador);
// console.log(iterador.next());

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
