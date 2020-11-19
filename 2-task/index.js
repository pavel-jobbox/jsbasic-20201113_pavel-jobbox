function print(text) {
  console.log(text);
}


function isValid(name) {
  let space = name.includes(' ');

  if (name.length > 4 && space != true) {
    return true
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
