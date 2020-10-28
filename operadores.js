let a = 5 + (5 - 10) * 3;
let mod = 5 % 2;
console.log(a);
console.log(mod);

// operadores relacionales
// >, <, >=, <=, ==, ===, !=, !==
console.log(2 > 1);
console.log(1 < 2);
console.log(2 <= 2);
console.log(2 >= 3);
console.log(3 == 3);
// Curiosidades del operador de asignación
/*
 * = 1 igual es asignación de valores
 * == 2 iguales es comparación de valores
 * === 3 iguales es comparación de tipo de dato y valor
 */
console.log(0 == false);
console.log("3" == 3);
console.log(7 == 7);

console.log(0 === false);
console.log("3" === 3);
console.log(7 === 7);

let i = 1;
// el compilador de la mayoria de lenguajes de programación
// interpretean esto por lo primero que aparezca
// si aparece primero el operador unario entonces hara eso
// sino entonces hara la impresión de "i" :)
console.log(++i);
//i += 2;
// operador unario 
i++;
i--;
++i;
--i;
console.log(i++);
// Operadores Lógicos //
// "!" NOT: niega la proposición actual
// "||" OR: basta que una proposición sea verdadera para validar toda la expresión
// "&&" AND: basta que una proposición sea falsa para no validar toda la expresión
console.log(!false);
console.log(!true);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));
