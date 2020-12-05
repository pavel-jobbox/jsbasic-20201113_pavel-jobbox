/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {

  const arr = []
  let x = str.split(' ').map(index => index.replace(/,/g, '')).filter(item => {
    let n = parseFloat(item)
    if (isNaN(n) != isNaN(NaN)) {
      arr.push(n)
    }
  })

  return result = {
    min: Math.min(...arr),
    max: Math.max(...arr)
  }
}
