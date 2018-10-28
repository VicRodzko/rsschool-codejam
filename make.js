module.exports = function make(...args) {
  const arr = [].concat(args);

  return function f(...newArgs) {
    if (typeof newArgs[0] === 'function') return arr.reduce(sum);

    arr.push(...newArgs);

    return f;
  };
};

function sum(a, b) {
  return a + b;
}
