let nombre = "Kenai",
    edad = 7;
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function() {
        console.log("Guau Guau");
    }
}

console.log(perro);
perro.ladrar();

const dog = {
    nombre,
    edad,
    raza: "callejero",
    ladrar() {
        console.log("Gua Gua Gua");
    }
}

console.log(dog);
perro.ladrar();
dog.ladrar();
