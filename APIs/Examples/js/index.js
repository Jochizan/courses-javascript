import hamburgerMenu from "./module.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
})