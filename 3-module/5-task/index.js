/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  const nums = str.split(' ').map((val) => parseFloat(val)).filter(num => !Number.isNaN(num));

  return result = {
    min: Math.min.apply(null, nums),
    Max: Math.max.apply(null, nums),
  }
}
