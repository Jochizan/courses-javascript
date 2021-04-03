const sevenBoom = (arr) => {
  let ans = 'there is no 7 in the array';
  let arrS = '';
  arr.forEach((el) => {
    arrS += el.toString();
  });
  arrS = arrS.split('');
  arrS.forEach((i) => {
    if (i === '7') ans = 'Boom!';
  });
  return ans;
};

sevenBoom([1, 2, 3, 4, 5, 6, 7]);
sevenBoom([8, 6, 33, 100]);
sevenBoom([2, 55, 60, 97, 86]);
