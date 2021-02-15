console.log(this);
this.lugar = "Contexto Global";
this.nombre = "Window";

function saludar(saludo, persona) {
  console.log(`${saludo} ${persona} desde el ${this.lugar}`);
}

saludar("Hola", "Bochi");

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Joan");
saludar.call(null, "Hola", "Joan");
saludar.call(this, "Hola", "Joan");
saludar.apply(obj, ["Adios", "Mircha"]);
saludar.apply(null, ["Adios", "Mircha"]);
saludar.apply(this, ["Adios", "Mircha"]);

const persona = {
  nombre: "Joan",
  saludar() {
    console.log(`Hola ${this.nombre}`);
  }
}

persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(this)
}

otraPersona.saludar();