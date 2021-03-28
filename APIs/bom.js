/* Propiedades y eventos del BOM */
// window.addEventListener("resize", (e) => {
//   // console.clear();
//   console.log("***************** Evento Resize *****************");
//   console.log(window.innerWidth);
//   console.log(window.innerHeight);
//   console.log(window.outerWidth);
//   console.log(window.outerHeight);
//   console.log(e);
// });

// window.addEventListener("scroll", (e) => {
//   // console.clear();
//   console.log("***************** Evento Scroll *****************");
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

// window.addEventListener("load", (e) => {
//   // console.clear();
//   console.log("***************** Evento Load *****************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// });

// window.addEventListener("DOMContentLoaded", (e) => {
//   // console.clear();
//   console.log("***************** Evento DOMContentLoaded *****************");
//   console.log(window.screenX);
//   console.log(window.screenY);
//   console.log(e);
// })
/**
 *
 *
 *
 *
 *
 *
 */

/* Métodos del BOM */

// const $btnAbrir = document.getElementById("abrir-ventana"),
//   $btnCerrar = document.getElementById("cerrar-ventana"),
//   $btnImprimir = document.getElementById("imprimir-ventana");

// let ventana;

// $btnAbrir.addEventListener("click", (e) => {
//   ventana = window.open("https://jonmircha.com/");
// })

// $btnCerrar.addEventListener("click", (e) => {
//   window.close();
// })

// $btnImprimir.addEventListener("click", (e) => {
//   window.print();
// })
/**
 *
 *
 *
 *
 *
 *
 *
 */

console.log("************** Objeto URL (location) **************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);

console.log("******************* Objeto Historial (history) *******************");
console.log(history);
console.log(history.length);
// history.forward(1);
// history.go(-3);
// history.back(2);

console.log("***************** Objeto Navegador (navigator) ******************");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);