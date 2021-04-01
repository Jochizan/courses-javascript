console.log(this);
console.log(window);
console.log(window === this);

this.nombre = "Contexto global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "Contexto global",
  imprimir() {
    console.log(this.nombre);
  }
}

obj.imprimir();

const obj2 = {
  nombre: "Contexto global 2",
  imprimir
}

obj2.imprimir();

const obj3 = {
  nombre: "Contexto objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  }
}

obj3.imprimir();

function persona(nombre) {
  const that = this;
  that.nombre = nombre;
  // this.nombre = nombre;
  // return console.log(this.nombre);
  return function() {
    console.log(that.nombre);
    // console.log(this.nombre);
  }
}

let joan = new persona("Joan");
joan();