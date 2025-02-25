// Исключить обратные ссылки
// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23,
};

let meetup = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// ! моё решение
let room2 = {
  number: 23,
};

let meetup2 = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room2,
};

// цикличные ссылки
room2.occupiedBy = meetup2;
meetup2.self = meetup2;

function replacer(key, value) {
  if (value === meetup2 && key !== '') {
    return undefined;
  }

  return value;
}

console.log(JSON.stringify(meetup2, replacer, 2));
// {
//   "title": "Совещание",
//   "occupiedBy": [
//     {
//       "name": "Иванов"
//     },
//     {
//       "name": "Петров"
//     }
//   ],
//   "place": {
//     "number": 23
//   }
// }

// ?? решение JS Info
let room3 = {
  number: 23,
};

let meetup3 = {
  title: 'Совещание',
  occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
  place: room3,
};

room3.occupiedBy = meetup3;
meetup3.self = meetup3;

console.log(
  JSON.stringify(meetup3, function replacer(key, value) {
    return key != '' && value == meetup3 ? undefined : value;
  })
);

/*
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/

// ! Функция replacer будет вызвана для каждой пары (key, value), и в первом вызове будет передан специальный «объект-обёртка»: {"": meetup}.
// ! Если мы реализуем только проверку value == meetup, то в результате получим undefined. Чтобы в первом вызове replacer не было удалено свойство, ссылающееся на meetup, нам также нужно добавить проверку key != "".
