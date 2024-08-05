// Что вы думаете? Выполнится ли .catch? Поясните свой ответ.

new Promise(function (resolve, reject) {
  setTimeout(() => {
    throw new Error('Whoops!');
  }, 1000);
}).catch(alert);

// ! Нет, т.е. catch не выполнится, т.к. должна быть reject функция вместо throw, типа: reject(new Error('Whoops!')); и по другому оформлен "сам" обработчик catch:
new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Whoops!'));
  }, 1000);
}).catch((error) => {
  console.log(`Ошибка.. ${error}`);
});

// Решение JS Info
// В данном примере ошибка генерируется не по ходу выполнения кода, а позже. Поэтому промис не может обработать её.
