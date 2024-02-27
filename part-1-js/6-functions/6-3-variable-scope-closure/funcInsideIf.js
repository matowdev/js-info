// Функция внутри if
// Посмотрите на код. Какой будет результат у вызова на последней строке?

// 'use strict';

let phrase = 'Hello';

if (true) {
  let user = 'John';

  function sayHi() {
    console.log(`${phrase}, ${user}!`);
  }
}

sayHi(); // в console будет.. Hello, John! (или ошибка "sayHi is not defined")

// ---
// Стоит уточнить.. в console будет: Hello, John! если без режима 'use strict' и при/в if (true) а не (false), ну и соответственно будет ошибка "sayHi is not defined", если добавить первое или изменить второе.
