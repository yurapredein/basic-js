const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  let arrResult = arr.slice(0);
  let foo = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!foo.includes(arrResult[i])) result.push(arrResult[i]);
    if (foo.includes(arrResult[i])) {
     if (arrResult[i] === foo[0]) i = i+1;
     if (arrResult[i] === foo[1] && arrResult[i-2] !== foo[0]) result.pop();
     if (arrResult[i] === foo[2] && arrResult[i+1] !== undefined) result.push(arrResult[i+1]);
     if (arrResult[i] === foo[3] && arrResult[i-2] !== foo[0] && arrResult[i-1] !== undefined) result.push(arrResult[i-1]);
    }
  }
  return result
}

module.exports = {
  transform
};
