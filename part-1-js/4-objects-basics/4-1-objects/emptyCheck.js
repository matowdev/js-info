// Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

function isEmpty(obj) {
  let empty = true;

  for (let property in obj) {
    if (property === undefined) break;
    empty = false;
  }

  return empty;
}

let schedule = {}; // "пустой" объект

let checkObj = isEmpty(schedule);

schedule['8:30'] = 'get up'; // добавление свойства, ключа/значения
console.log(schedule); // {8:30: 'get up'}

checkObj = isEmpty(schedule);

checkObj
  ? console.log(
      `Проверяемый объект без элементов? т.е. он 'пустой' - ${checkObj}!`
    )
  : console.log(
      `Проверяемый объект без элементов? т.е. он 'пустой' - ${checkObj} ..не 'пустой'!`
    );

// как результат.. не 'пустой'!

//
// решение JS Info
// function isEmpty(obj) {
//   for (let key in obj) {
//     // если тело цикла начнет выполняться - значит в объекте есть свойства
//     return false;
//   }
//   return true;
// }
