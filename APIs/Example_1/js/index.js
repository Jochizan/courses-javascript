import hamburgerMenu from "./module.js";
import { digitalClock, alarm } from "./reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
});
