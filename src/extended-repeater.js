const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let arr;
  let result = '';
  let parameters = {repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionRepeatTimes: 1, 
    additionSeparator: '|'}
  for (key in options) parameters[key] = options[key];
  if (parameters.addition === null) parameters.addition = 'null'; 
  arr = new Array(parameters.additionRepeatTimes);
  arr = arr.fill(parameters.addition);
  result = str + arr.join(parameters.additionSeparator);
 
  return Array(parameters.repeatTimes).fill(result).join(parameters.separator);
}

module.exports = {
  repeater
};
