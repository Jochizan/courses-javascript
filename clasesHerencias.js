class Animal {
  // el constructor es un metodo especial que se ejecuta
  // en el momento de instanciar una clase :3
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }
  // métodos
  sonar() {
    console.log("Hago sonidos por que estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    // super manda a llamar el constructor
    // de la clase padre :3
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    console.log('Soy un perro y mi sonido es un ladrido');
  }

  ladrar() {
    console.log('Guaaaaau Guaaaaau');
  }
}

const mimi = new Animal("Mimi", "Hembra"),
  scooby = new Perro("Scooby", "Macho", 200);

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
