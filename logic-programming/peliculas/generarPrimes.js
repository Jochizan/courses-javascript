const generarPrimes = (n=0) => {
  let count = 0;
  let j = 2;
  while (count < n) {
    if (isPrime(j)) {
      console.log(j);
      count++;
    }
    j++;
  }
}

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

generarPrimes(10);
