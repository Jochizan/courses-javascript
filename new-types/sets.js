const set = new Set([1, 2, 3, 4, 5, 5, true, false, false, {}, {}, "hola", "HOLA"]);
console.log(set);
console.log(set.size);
const set2 = new Set();
set2.add(1);
set2.add(null);
set2.add(null);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add({});
set2.add({});
set2.add(false);
set2.add(true);
set2.add(false);
console.log(set2);
console.log(set2.size);

console.log("Recorriendo Set 1");
for (item of set) {
  console.log(item);
}

console.log("Recorriendo Set 2");
set2.forEach(item => console.log(item));

// Array.from convierte a arreglos los sets
console.log(Array.from(set2)[0]);
console.log(Array.from(set2)[1]);

// Eliminamos con delete
set.delete("hola");
console.log(set);

// Buscamos con la function has
console.log(set.has("hola"))
console.log(set.has("HOLA"))
console.log(set.has("19"))

set2.clear();
console.log(set2)
