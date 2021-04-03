const numbers = [1, 2, 3]
// Sin destructuración
let uno = numbers[0],
    dos = numbers[1],
    tres = numbers[2];
console.log(uno, dos, tres);
// Con destructuración
const [one, two, three] = numbers;
console.log(one, two, three);

let persona = {
    nombre: "Joan",
    apellido: "Roca",
    edad: 19
}

let {nombre, apellido, age} = persona;
console.log(nombre, apellido, age);
