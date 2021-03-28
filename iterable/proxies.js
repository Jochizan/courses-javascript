// El objeto en el que luego se validaran sus propiedades y los valores que se le entreguen
const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

// Aquí se hacen las validaciones en base al objeto "persona" definida antes
const manejador = {
  set(obj, prop, value) {
    if (Object.keys(obj).indexOf(prop) === -1) {
      return console.error(
        `La propiedad "${prop}" no existe en el objeto persona.`
      );
    }
    if (
      (prop === "nombre" || prop === "apellido") &&
      !/^[A-Za-zÑñAáEéÍíÓóÚúûu\s]+$/g.test(value)
    ) {
      return console.error(
        `La propiedad "${prop}" solo acepta letras y espaciones en blanco`
      );
    }
    obj[prop] = value;
  },
};

const joan = new Proxy(persona, manejador);
joan.nombre = "Joan";
joan.apellido = "Roca";
joan.edad = 20;
joan.twitter = "@joan4501";
console.log(joan);
