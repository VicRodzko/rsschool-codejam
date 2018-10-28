module.exports = function sumOfOther(arr) {
  let summ = 0;

  for (let i = 0; i < arr.length; i++) {
    summ += arr[i];
  }

  return arr.map(item => summ - item);
};
