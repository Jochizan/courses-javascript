const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
console.log(a);
console.log(b);
console.log(b[3][3][2]);
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);
const d = Array(100).fill(false);
console.log(d);
// e y f ya no se usan mucho
const e = new Array();
console.log(e);
const f = new Array(1, 2, 3, false, true);
console.log(f);

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);
colores.push("Negro");
console.log(colores);
colores.pop();
console.log(colores);

colores.forEach(function (el, index) {
    console.log(`<li id="${index}">${el}<li>`);
})
