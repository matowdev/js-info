// Название JavaScript
// Используя конструкцию if..else, напишите код, который будет спрашивать: Какое «официальное» название JavaScript?
function getOfficialName() {
  let name = prompt('Какое «официальное» название у/для JavaScript?', '');
  if (name === 'ECMAScript' || name === 'ecmascript') {
    return alert('Верно! Ecma-знаток!');
  } else if (name === null) {
    return alert('До свидания..');
  } else if (name === '') {
    return alert('Да же и не попробовали..');
  } else {
    return alert('Не знаете? «Официальное» название - ECMAScript!');
  }
}

getOfficialName();

// решение JS Info
// <!DOCTYPE html>
// <html>

// <body>
//   <script>
//     'use strict';

//     let value = prompt('Какое "официальное" название JavaScript?', '');

//     if (value == 'ECMAScript') {
//       alert('Верно!');
//     } else {
//       alert('Не знаете? ECMAScript!');
//     }
//   </script>
// </body>

// </html>
