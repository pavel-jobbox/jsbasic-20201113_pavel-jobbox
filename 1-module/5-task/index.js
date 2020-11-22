/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length >= maxlength) {
    let newStr = str.slice(0, maxlength);
        return newStr + '...';
  } else {
    return str;
  }
}