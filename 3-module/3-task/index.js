/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split('-').map((word, indx) => indx == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}
