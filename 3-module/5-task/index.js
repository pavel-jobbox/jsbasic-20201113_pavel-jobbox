/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  
  const err = [];

  str.split(' ').map((val) => parseFloat(val)).filter(val => {
      if(isNaN(val) != isNaN(NaN)){
          err.push(Number(val))
      }
  });

  return  result = {
      min: Math.min.apply(null, err),
      max: Math.max.apply(null, err)
  }  
}
