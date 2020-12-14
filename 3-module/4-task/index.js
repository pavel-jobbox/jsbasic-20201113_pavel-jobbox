/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let str = ``;
  let newArr = [];

  for (let i of users) {
      let name = i.name;
      let balance = i.balance;

      if (i.age <= age) {
          str = `${name}, ${balance}`;
          newArr.push(str);
      }

  }
  return newArr.join('\n');
}
