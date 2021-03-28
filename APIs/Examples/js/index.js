import hamburgerMenu from "./module.js";
import { digitalClock, alarm } from "./reloj.js";
import { shortcuts, moveBall } from "./teclado.js";
import countDown from "./regresiva.js";
import scrollTopButton from "./btnScroll.js";
import darkTheme from "./darkTheme.js";
import responsiveMedia from "./objResponsive.js";
import responsiveTester from "./testerResponsive.js";
import userDeviceInfo from "./detectionDevice.js";
import networkStatus from "./detectionNetwork.js";
import webCam from "./detectionWebCam.js";
import getGeolocation from "./geolocation.js";
import searchFilters from "./searchFilters.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scrollSpy.js";
import smartVideo from "./videoSmart.js";
import contactFormValidations from "./formValidation.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countDown(
    "count-down",
    "Jun 23, 2021 03:23:20",
    "Feliz Cumpleaños amigo y docente digital 😀"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/embed/alObUAhcJ9Y" target="_blank" rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/alObUAhcJ9Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href="https://g.page/animesuzumakilosolivos?share" target="_blank" rel=noopener>Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.810355930734!2d-77.07315300296489!3d-11.987620577669983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cfa873e1febb%3A0xdd7c23612720715!2sAnimes%20Uzumaki!5e0!3m2!1ses-419!2spe!4v1614468159677!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("web-cam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();