/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {

  let names = [];

  for (let key in users) {
    let x = users[key];
    names.push(x.name);
  }
  return names;
}
