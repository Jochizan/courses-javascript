let a = new String("Hola");
console.log(a);

const b = {
    
}
console.log(b);

const c = new Object();
console.log(c);
//dentro de un objeto las variables se le van a llamar
//atributos/propiedades y las funciones se les llama métodos.
const jon = {
    nombre: "Joan",
    apellido: "Roca",
    edad: 19,
    hobbys: ["Programar", "Hacer ejercicio", "Enseñar"],
    soltero: false,
    contacto: {
        email: "joanjose_04@gmail.com",
        twitter: "@joan123148",
        movil: "999555217",
    },
    saludar: function () {
        console.log(`Hola :)`);
    },
    decirNombre: function () {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
    }
}

console.log(jon);
console.log(jon.nombre);
console.log(jon.apellido);
console.log(jon.hobbys[1]);
// ejecutar la funcion o metodo dentro de nuestro objeto.
console.log(jon.saludar);
jon.saludar();
jon.decirNombre();
// crear los arreglos dependiendo de las llaves o valores de los mismos
console.log(Object.keys(jon));
console.log(Object.values(jon));
// funciones para los objetos para mostrar si existe tal propiedad
console.log(jon.hasOwnProperty("nombre"));
console.log(jon.hasOwnProperty("nacimiento"));

const joan = Object.keys(jon);
console.log(joan);
