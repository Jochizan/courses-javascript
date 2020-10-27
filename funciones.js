// Función Declarada

function estoEsUnaFuncion() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

// Invocación de función
estoEsUnaFuncion();

function funcionQueRetornaValor() {
    console.log("Uno");
    return 19;
    console.log("Dos");
    console.log("Tres");
    return "La función ha retornado una cadena de texto";
}

let valorDeFuncion = funcionQueRetornaValor();
console.log(valorDeFuncion);

function saludar(nombre, edad) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
}

saludar("Kenay", 7);
saludar();

funcionDeclarada();

function funcionDeclarada() {
    console.log("Esto es una función declarada puede ejecutarse en cualquier parte del codigo");
}

funcionDeclarada();

// Función anonima
const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir, una función que se le a asignado una variable, si invocamos esta función antes de su definición JS nos dara un error por que se tendria que declarar antes");
}

funcionExpresada();
