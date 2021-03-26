const numMax = 10;
const numMin = 1;

const numRandom = () => Math.round(Math.random() * (numMax - numMin) + numMin);
// redondeamos el decimal que nos devuelve envolviendo todo en Math.round

console.log(numRandom());
console.log(numRandom());
console.log(numRandom());
console.log(numRandom());
