function sumar(a, b, ...c) {
    let resultado = a + b;
    c.forEach(function(n) {
        resultado += n;
    })
    return resultado;
}

console.log(sumar(1, 2, 3, 4, 10));

function sum(a, ...c) {
    let resultado = a;
    c.forEach(function(n) {
        resultado += n;
    })
    return resultado;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4, 5, 6));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

const arr1 = [1, 2, 3, 4, 5],
    arr2 = [6, 7, 8, 9, 0];

console.log(arr1, arr2);

const arr3 = [...arr1, ...arr2];
console.log(arr3);
