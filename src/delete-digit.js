const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numString = n.toString()
  let arr = []
  arr[0] = numString.slice(1)
  for (let i = 1; i < numString.length; i++) {
    arr.push(numString.slice(0, i) + numString.slice(i+1))
  }
  return Math.max(...arr);
}

module.exports = {
  deleteDigit
};
