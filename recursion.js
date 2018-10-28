module.exports = function recursion(tree) {
  const arr = [];

  const getArr = (obj, step) => {
    arr[step] = arr[step] ? arr[step].concat([obj.value]) : [obj.value];

    if (obj.left) getArr(obj.left, step + 1);
    if (obj.right) getArr(obj.right, step + 1);
  };

  getArr(tree, 0);

  return arr;
};
