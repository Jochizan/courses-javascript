const json = {
  cadena: "Joan",
  numero: 35,
  boolean: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@joan12312",
    email: "remnyachizot2015@gmail.com",
  },
  nulo: null,
};

console.log(json);

console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
// console.log(JSON.parse(""));

console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));
console.log(JSON.stringify(json));