/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  str = str.split(' ').filter(item => parseFloat(item)).map((index) => index.replace(/,/, ''))

  let arr = []
  for (let i in str) {
    arr.push(Number(str[i]))
  }

  return {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }
}
