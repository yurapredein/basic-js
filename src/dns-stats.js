const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};
  if (domains.length == 0) {
    return counts;
  }

  domains.forEach((domain) => {
    const domenParts = domain.split(".").reverse();
    let key = "";

    domenParts.forEach((domenParts) => {
      key = `${key}.${domenParts}`;
      counts[key] = (counts[key] || 0) + 1;
    });
  });
  return counts;
}

module.exports = {
  getDNSStats
};
