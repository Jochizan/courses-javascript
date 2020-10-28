let edad = 17;

if (edad > 17) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

if (edad < 18) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

if (edad <= 17) {
    console.log("Eres menor de edad");
} else {
    console.log("Eres mayor de edad");
}

let hora = 5;

if (hora >= 0 && hora <= 5) {
    console.log("Dejame dormir");
} else if(hora >= 6 && hora <= 11) {
    console.log("Buenos días");
} else if(hora >= 12 && hora <= 18) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

if (hora <= 6) {
    console.log("Dejame dormir");
} else if(hora > 5 && hora < 12) {
    console.log("Buenos días");
} else if(hora > 11 && hora < 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}

// Operador ternario (condicion) ? verdadero : falso
console.log(edad > 17 ? "Mayor de edad" : "Menor de edad");
let mayor = (edad > 17) ? "Es mayor" : "Es menor";
console.log(mayor);

// switch - case
let dia = 12;
switch (dia) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log("Opcion no contemplada");
        break;
}
