// esta es una posible sintaxis para una funcion autoejecutable
(function () {
  console.log("Mi primer IIFE");
})();

// d = document, w = window, c = console
(function (d, w, c) {
  console.log("Mi primer IIFE");
  console.log(d);
  c.log("Este es un console.log")
})(1, 2,  console);
// Aquí si es necesario el punto y coma
//alert("Hola")
