console.log(Symbol());
let id = Symbol("id");
let id2 = Symbol("id2");
console.log(id, id2);
console.log(typeof id, typeof id2);
console.log(id === id2);

const NAME = Symbol();
const HELLO = Symbol();

const persona = {
  [NAME]: "Joan"
}

console.log(persona);

persona.NAME = "JOAN";

console.log(persona);
console.log(persona.NAME);
console.log(persona[NAME]);

persona[HELLO] = function () {
  console.log(`Hola`);
}

console.log(persona);

for (let property in persona) {
  console.log(property);
  console.log(persona[property]);
}

console.log(Object.getOwnPropertySymbols(persona));
