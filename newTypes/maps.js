let map = new Map();
map.set("nombre", "Joan");
map.set("apellido", "Roca");
map.set("edad", 35);

console.log(map);
console.log(map.size);
console.log(map.has("correo"));
console.log(map.has("nombre"));
console.log(map.get("nombre"));
map.set("nombre", "Joan José");
console.log(map.get("nombre"));
map.delete("apellido");
map.set(19, "diecinueve");
map.set(false, "falso");
map.set({}, {});
console.log(map);

for (let [key, value] of map) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

let map2 = new Map([
  ["nombre", "Kenai"],
  ["edad", 9],
  ["animal", "Perro"],
  [null, "nulo"]
]);

console.log(map2);

const keysMap2 = [...map2.keys()];
const valuesMap2 = [...map2.values()];

console.log(keysMap2);
console.log(valuesMap2);
