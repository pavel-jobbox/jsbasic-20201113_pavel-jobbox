/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */

function factorial(n) {
  let num = 1;
  while (n >= 1) {
    num = num * n
    n = n - 1
  }

  return num
}
