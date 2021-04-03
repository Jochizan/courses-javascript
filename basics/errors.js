try {
    console.log("En el try se agrega el código a evaluar");
    noexiste;
    console.log("Segundo mensaje en el try");
} catch (error) {
    console.log("El bloque captura cualquier error surgido o lanzado en el try");
} finally {
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

try {
    let number = "y";
    if (isNaN(number)) {
        throw new Error("Error el caracter introducido no es un Número")
    }
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`);
}
