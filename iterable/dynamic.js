const aleatorio = Math.round(Math.random() * 1000 + 5);
const objUsuarios = {
  propiedad: "Value",
  [`id_${aleatorio}`]: "Value random"
};
const usuarios = ["Joan", "José", "Miguel", "Kala", "Kenai"];

usuarios.forEach((usuario, index) => (objUsuarios[`id_${index}`] = usuario));

console.log(objUsuarios);