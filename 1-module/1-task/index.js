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

factorial(0); // 1
factorial(1); // 1
factorial(3); // 6
factorial(5); // 120
