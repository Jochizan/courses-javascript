// POO
/*
 * Clases - Modelos a seguir
 * Obejtos - Es una instancia de la clase
 *  Atributos - Es una caracteristica o propiedad del objeto (Son variables dentro de un objeto)
 *  Métodos - Son las acciones que un objeto puede realizar (Son funciones dentro de un objeto)
 */

const animal = {
    nombre: "snoppy",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}

const animal2 = {
    nombre: "Lola Bonny",
    sonar() {
        console.log("Hago sonidos porque estoy vivo");
    }
}

console.log(animal);
console.log(animal2);

// Función constructora donde asignamos los metodos al prototipo,
// no a la función como tal

function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

// Métodos agregados al prototipo de la función
Animal.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function() {
    console.log(`Hola mi nombre es ${this.nombre}`);
}
const snoopy = new Animal("Wishi", "Macho"),
    lolaBunny = new Animal("LolaBunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();

