/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if (str != 0) {
    str = str[0].toUpperCase() + str.slice(1);
    return str;
  } else {
    return str;
  }
}

