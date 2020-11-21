/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */

 
function checkSpam(str) {
  let newStr = str.toLowerCase();
  if( newStr.includes('1xbet') ||  newStr.includes('xxxxx')){
      return true
  }else{
      return false
  }
}