let count = 0;

while (count < 10) {
    console.log("while " + count);
    count++;
}

do {
    console.log("do while " + count);
    count++;
} while (count < 10);

let numeros = [10, 20, 30, 40, 50, 60, 80, 100];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

const joan = {
    nombre: "joan",
    apellido: "Roca",
    edad: 19
}

// for in iterar o recorrer las propiedades como sus elementos.
for (const propiedad in joan) {
    console.log(`Key: ${propiedad}. Value: ${joan[propiedad]}`);
}

// for of para reccorrer cualquier objeto que pueda ser iterable
for (const elemento of numeros) {
    console.log(elemento);
}

let cadena = "Hola mundo";

for (const ch of cadena) {
    console.log(ch);
}
