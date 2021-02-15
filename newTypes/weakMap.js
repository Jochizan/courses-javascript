const wMap = new WeakMap();
let key1 = {},
  key2 = {},
  key3 = {};

wMap.set(key1, 1);
wMap.set(key2, 2);
console.log(wMap);

console.log(wMap.has(key1));
console.log(wMap.has(key2));

console.log(wMap.get(key1));
console.log(wMap.get(key2));
console.log(wMap.get(key3));

wMap.delete(key2);
console.log(wMap);

wMap.set(key2, 2);
wMap.set(key3, 3);
console.log(wMap);

setInterval(() => console.log(wMap), 1000);

setTimeout(() => {
  key1 = null;
  key2 = null;
  key3 = null;
}, 5000);