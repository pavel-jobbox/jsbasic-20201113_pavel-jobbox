/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    let newStr = str.slice(0, maxlength - 1) + String.fromCodePoint(133);
    return newStr;
  } else {
    return str;
  }
}