// Учитывает ли функция последние изменения?
// Функция sayHi использует имя внешней переменной. Какое значение будет использоваться при выполнении функции?

let hisName = 'John';

function sayHi() {
  console.log(`Hi, ${hisName}!`);
}

hisName = 'Peter';

// Что будет в console: John или Peter?
sayHi(); // будет.. Hi, Peter!
