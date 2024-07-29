// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

// function delay(ms) {
//   // ваш код
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// ** декларативное решение (короткая запись)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(3000).then(() => console.log('Выполнилось через 3 секунды! Ы..'));

// ** императивное решение (расширенная запись)
function delay2(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, ms);
  });
}

delay2(4000).then(function () {
  console.log('Выполнилось через 4 секунды! Ы..');
});

// решение JS Info
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// ..заметьте, что resolve вызывается без аргументов. Мы не возвращаем из delay ничего, просто гарантируем задержку.
