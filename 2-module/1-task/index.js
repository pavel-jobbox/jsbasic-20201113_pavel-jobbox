/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let sum = 0;

  for (let i in salaries) {

    let value = salaries[i];

    if (Number(value) == Number(value)) {
      sum = sum + value;
    } else {
      continue;
    }
  }

  return sum;
}
