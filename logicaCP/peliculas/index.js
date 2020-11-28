class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;
    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
  }
  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
      "Crime", "Documentary", "Drama", "Family", "Fantasy", "Film noir", "Game Show",
      "History", "Horror", "Musical", "Music", "Mistery", "News", "Reality-TV", "Romance",
      "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }
  static generosAceptados() {
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }
  validarArray(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacío`);
    }
    if (!(valor instanceof Array)) {
      return console.error(`${propiedad} "${valor}" ingresado, NO es un arreglo`);
    }
    if (!valor.length) {
      return console.error("El arreglo esta vacío");
    }
    for (let cadena of valor) {
      if (typeof cadena !== "string") {
        return console.error(`El valor "${cadena}" ingresado, NO es un string`);
      }
    }
    return true;
  }
  validarNumero(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacío`);
    }
    if (typeof valor !== "number") {
      return console.error(`${propiedad} "${valor}" ingresado, NO es un número`);
    }
  }
  validarCadena(propiedad, valor) {
    if (!valor) {
      return console.warn(`${propiedad} "${valor}" esta vacío`);
    }
    if (typeof valor !== "string") {
      return console.error(`${propiedad} "${valor}" ingresado, NO es una cadena de texto`);
    }
    return true;
  }
  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud) {
      return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos (${longitud}).`);
    }
    return true;
  }
  validarIMDB(id) {
    if (this.validarCadena("IMDB id", id)) {
      if (!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
        return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los primeros 2 letras minúsculas, los 7 restantes números`);
      }
    }
  }
  validarTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo)) {
      this.validarLongitudCadena("Titulo", titulo, 100);
    }
  }
  validarDirector(director) {
    if (this.validarCadena("Director", director)) {
      this.validarLongitudCadena("Titulo", director, 50);
    }
  }
  validarEstreno(estreno) {
    if (this.validarNumero("Año de estreno", estreno)) {
      if (!(/^([0-9]){4}$/.test(estreno))) {
        return console.error(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 digitos`);
      }
    }
  }
  validarPais(pais) {
    this.validarArray("País", pais);
  }
  validarGeneros(generos) {
    if (this.validarArray("Géneros", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }
  validarCalificacion(calificacion) {
    if (this.validarNumero("Calificación", calificacion)) {
      return !(calificacion > 0 && calificacion < 10) 
        ? console.error("La calificación tiene que estar en un rango entre 0 y 10")
        : this.calificacion = calificacion.toFixed(1);
    }
  }
  fichaTecnica() {
    console.info(`Ficha Técnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join("-")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB ID: "${this.id}"`);
  }
}

/*const peli = new Pelicula({*/
  //id: "tt1234567",
  //titulo: "Titulo de la Peli",
  //director: "Director de la peli",
  //estreno: 2020,
  //pais: ["México", "Perù"],
  //generos: ["Comedy", "Family", "Sport"],
  //calificacion: 7.789
/*});*/

//peli.fichaTecnica();

const misPelis = [
  {
    id: "tt0758758",
    titulo: "Into the Wild",
    director: "Sean Penn",
    estreno: 2007,
    pais: ["USA"],
    generos: ["Adventure", "Biography", "Drama"],
    calificacion: 8.1
  },
  {
    id: "tt0479143",
    titulo: "Rocky Balboa",
    director: "Sylvester Stallone",
    estreno: 2006,
    pais: ["USA"],
    generos: ["Action", "Drama", "Sport"],
    calificacion: 7.1
  },
  {
    id: "tt0468569",
    titulo: "The Dark Knight",
    director: "Christopher Nolan",
    estreno: 2008,
    pais: ["USA", "UK"],
    generos: ["Action", "Crime", "Drama"],
    calificacion: 9.0
  }
]

misPelis.forEach(el => new Pelicula(el).fichaTecnica());
