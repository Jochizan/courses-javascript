// Asi no se hace
// const wSet = new WeakSet([1, 2]);

const wSet = new WeakSet();
let value1 = {"value1": 1},
  value2 = {"value2": 2},
  value3 = {"value3": 3};

wSet.add(value1);
wSet.add(value2);

console.log(wSet);

console.log(wSet.has(value1));
console.log(wSet.has(value3));

wSet.delete(value2);
console.log(wSet);

wSet.add(value2);
wSet.add(value3);

console.log(wSet);

setInterval(() => {
  console.log(wSet);
}, 1000)