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
    this.raza = null;
  }

  sonar() {
    console.log('Soy un perro y mi sonido es un ladrido');
  }

  ladrar() {
    console.log('Guaaaaau Guaaaaau');
  }

  // Un metodo estatico se pueden ejecutar sin
  // la necesidad de instanciar la clase
  static queEres() {
    console.log("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
  }
  // los metodos getters y setters son metodos especiales que
  // nos permiten establecer y obtener los valores de atri_
  // butos de nuestra clase
  get getRaza() {
    return this.raza;
  }

  set setRaza(raza) {
    this.raza = raza;
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

Perro.queEres();

console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);
