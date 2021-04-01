// función basica de arrow function
const saludar = () => console.log("Hola");

saludar();

const saludo = (nombre) => console.log(`Hola ${nombre}`);

saludo("Joan");

const sumar = (a, b) => a + b; 

console.log(sumar(8, 9));

const funcionVariasVaraibles = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionVariasVaraibles();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((el, index) => {
    console.log(`El elemento ${el} esta en la posición ${index}`);
});

//function perro() {
    //console.log(this);
//}

//perro();

const perro = {
    nombre: "Kenai",
    // Bunas practicas de programación es solo declarar la función de esta manera
    ladrar() {
        console.log(this);
    }
}

perro.ladrar();
