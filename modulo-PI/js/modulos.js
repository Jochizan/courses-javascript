import saludar, {Saludar, PI, usuario} from "./constantes.js"
// Se pueden poner alias
import {aritmetica as calc} from "./aritmetica.js"

console.log("Archivo modulos.js")
console.log(PI)
console.log(usuario)
console.log(calc.sumar(3, 4))
console.log(calc.restar(3, 4))
saludar();
let saludo = new Saludar();
saludo;