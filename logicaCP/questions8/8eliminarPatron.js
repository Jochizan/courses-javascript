const eliminarPatron = (text="", patron="") =>
  (!text)
    ? console.warn("No ingresaste un texto")
    : (!patron)
      ? console.warn("No ingresaste un patrón")
      : console.log(text.replace(new RegExp(patron, 'ig'), ''));

eliminarPatron();

eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5, xyz6, xyz7");

eliminarPatron("xyz1, xyz2, xyz3, xyz4, xyz5, xyz6, xyz7", "xyz");

eliminarPatron("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", "o")
