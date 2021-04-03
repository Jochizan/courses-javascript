const scores = {
  A: 100,
  B: 14,
  C: 9,
  D: 28,
  E: 145,
  F: 12,
  G: 3,
  H: 10,
  I: 200,
  J: 100,
  K: 114,
  L: 100,
  M: 25,
  N: 450,
  O: 80,
  P: 2,
  Q: 12,
  R: 400,
  S: 113,
  T: 405,
  U: 11,
  V: 10,
  W: 10,
  X: 3,
  Y: 210,
  Z: 23,
};

const nameScore = (str) => {
  let ans = 0;
  for (let i = 0; i < str.length; ++i) {
    let index = str.charAt(i);
    ans += scores[index];
  }
  return ans <= 60
    ? 'NOT TOO GOOD'
    : ans <= 300
    ? 'PRETTY GOOD'
    : ans <= 599
    ? 'VERY GOOD'
    : 'THE BEST';
};

console.log(nameScore('MUBASHIR'));
