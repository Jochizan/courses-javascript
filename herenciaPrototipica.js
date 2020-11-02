function Animal(nombre, genero) {
  this.genero = genero;
  this.nombre = nombre;
}

Animal.prototype.sonar = function() {
  console.log("Hago sonidos porque estoy vivo");
}

Animal.prototype.saludar = function() {
  console.log(`Hola mi nombre es ${this.nombre}`);
}

function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
// Sobreescritura de métodos del Prototipo padre en el hijo
Perro.prototype.sonar = function() {
  console.log("Soy un perro y mo sonido es un ladrido");
}

Perro.prototype.ladrar = function() {
  console.log("Guauuuuuu Guauuuuuu!!!");
}

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
  lolaBunny = new Animal("Lola Bunny", "Hembra");

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();
