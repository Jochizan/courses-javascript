export const PI = Math.PI;

export let usuario = "Joan";
let password = "EAssa231";

const saludar = () => {
  console.log("Hola modulos ecmascript6");
}
// esto se debe a que las clases son como funciones constructoras, pero mejoradas
export class Saludar {
  constructor() {
    console.log("Hola Clases ecmascript6");
  }
}

export default saludar;